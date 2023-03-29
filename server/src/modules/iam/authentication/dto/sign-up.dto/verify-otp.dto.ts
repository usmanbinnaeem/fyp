import { MinLength, IsNotEmpty, IsString } from 'class-validator';

export class VerifyOtpDto {
  @IsNotEmpty()
  @IsString()
  otpId: string;

  @IsNotEmpty()
  otp: number;
}
