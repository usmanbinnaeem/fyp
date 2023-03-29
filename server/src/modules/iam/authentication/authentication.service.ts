import {
  ConflictException,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../users/entities/user.entity';
import { Repository } from 'typeorm';
import { HashingService } from '../hashing/hashing.service';
import { SignUpDto } from './dto/sign-up.dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto/sign-in.dto';
import { JwtService } from '@nestjs/jwt';
import jwtConfig from '../config/jwt.config';
import { ConfigType } from '@nestjs/config';
import { ActiveUserData } from '../interfaces/active-user-data.interface';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import {
  RefreshTokenIdsStorage,
  InvalidateRefreshTokenError,
} from './refresh-token-ids.storage/refresh-token-ids.storage';
import { randomUUID } from 'crypto';
import * as twilio from 'twilio';
import { v4 as uuidv4 } from 'uuid';

export interface OtpEntry {
  id: string;
  phoneNumber: string;
  otp: number;
  expiresAt: Date;
}

@Injectable()
export class AuthenticationService {
  private readonly otps: Map<string, OtpEntry> = new Map();
  private readonly twilioClient: twilio.Twilio = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN,
  );
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
    private readonly hashingService: HashingService,
    private readonly jwtService: JwtService,
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
    private readonly refreshTokenIdsStorage: RefreshTokenIdsStorage,
  ) {}

  async signUp(signUpDto: SignUpDto) {
    try {
      const user = new User();
      user.phoneNumber = signUpDto.phoneNumber;
      user.password = await this.hashingService.hash(signUpDto.password);
      user.role = signUpDto.role;
      const otp = await this.sendOtp(signUpDto.phoneNumber);
      console.log(otp);
      const newUser = await this.usersRepository.save(user);
      return {
        success: true,
        message: 'created successfully',
        otpId: otp,
        user: newUser,
      };
    } catch (err) {
      const pgUniqueViolationErrorCode = '23505';
      if (err.code === pgUniqueViolationErrorCode) {
        throw new ConflictException();
      }
      throw err;
    }
  }

  async sendOtp(phoneNumber: string): Promise<string> {
    const otp = this.generateOtp();
    console.log(otp);
    const otpEntry = this.createOtpEntry(phoneNumber, otp);

    await this.twilioClient.messages.create({
      body: `Your OTP is: ${otp}`,
      from: '+14344742641',
      to: phoneNumber,
    });
    this.refreshTokenIdsStorage.insert_otp(otpEntry.id, String(otpEntry.otp));
    return otpEntry.id;
  }

  async resendOtp(otpId: string): Promise<void> {
    const otpEntry = this.otps.get(otpId);

    if (!otpEntry) {
      throw new Error('Invalid OTP ID');
    }

    const otp = this.generateOtp();
    otpEntry.otp = otp;
    otpEntry.expiresAt = this.getExpiryDate();

    await this.twilioClient.messages.create({
      body: `Your OTP is: ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: otpEntry.phoneNumber,
    });

    this.otps.set(otpId, otpEntry);
  }

  async verifyOtp(otpId: string, otp: number): Promise<boolean> {
    // this.refreshTokenIdsStorage.validate_otp(otpId);
    const otpEntry = await this.refreshTokenIdsStorage.validate_otp(otpId);
    console.log(otpEntry);
    if (!otpEntry) {
      throw new Error('Invalid OTP ID');
    }

    // if (new Date() > otpEntry.expiresAt) {
    //   throw new Error('OTP has expired');
    // }

    return otpEntry === String(otp);
  }

  private generateOtp(): number {
    return Math.floor(100000 + Math.random() * 900000);
  }

  private createOtpEntry(phoneNumber: string, otp: number): OtpEntry {
    return {
      id: uuidv4(),
      phoneNumber,
      otp,
      expiresAt: this.getExpiryDate(),
    };
  }

  private getExpiryDate(): Date {
    const expiresInMinutes = 5;
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + expiresInMinutes);
    return expiresAt;
  }

  async signIn(signInDto: SignInDto) {
    const user = await this.usersRepository.findOneBy({
      phoneNumber: signInDto.phoneNumber,
    });

    if (!user) {
      throw new UnauthorizedException("User doesn't exist");
    }

    const isEqual = await this.hashingService.compare(
      signInDto.password,
      user.password,
    );
    if (!isEqual) {
      throw new UnauthorizedException("Password doesn't match");
    }

    return await this.generateTokens(user);
  }

  async refreshTokens(refreshTokenDto: RefreshTokenDto) {
    try {
      const { sub, refreshTokenId } = await this.jwtService.verifyAsync<
        Pick<ActiveUserData, 'sub'> & { refreshTokenId: string }
      >(refreshTokenDto.refreshToken, {
        secret: this.jwtConfiguration.secret,
        issuer: this.jwtConfiguration.issuer,
        audience: this.jwtConfiguration.audience,
      });

      const user = await this.usersRepository.findOneByOrFail({
        id: sub,
      });

      const isValid = await this.refreshTokenIdsStorage.validate(
        user.id,
        refreshTokenId,
      );
      if (isValid) {
        await this.refreshTokenIdsStorage.inValidate(user.id);
      } else {
        throw new Error('refresh token is invalid');
      }
      return this.generateTokens(user);
    } catch (err) {
      if (err instanceof InvalidateRefreshTokenError) {
        throw new UnauthorizedException('Access denied');
      }
      throw new UnauthorizedException();
    }
  }

  private async signToken<T>(userId: number, expiresIn: number, payload?: T) {
    return await this.jwtService.signAsync(
      {
        sub: userId,
        ...payload,
      },
      {
        audience: this.jwtConfiguration.audience,
        issuer: this.jwtConfiguration.issuer,
        secret: this.jwtConfiguration.secret,
        expiresIn,
      },
    );
  }

  async generateTokens(user: User) {
    const refreshTokenId = randomUUID();
    const [accessToken, refreshToken] = await Promise.all([
      this.signToken<Partial<ActiveUserData>>(
        user.id,
        this.jwtConfiguration.accessTokenTtl,
        {
          phone: user.phoneNumber,
          role: user.role,
        },
      ),
      this.signToken(user.id, this.jwtConfiguration.refreshTokenTtl, {
        refreshTokenId,
      }),
    ]);
    await this.refreshTokenIdsStorage.insert(user.id, refreshTokenId);
    return {
      accessToken,
      refreshToken,
    };
  }
}
