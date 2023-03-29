import { MinLength, IsPhoneNumber, IsNotEmpty } from 'class-validator';

export class SignInDto {
  @IsPhoneNumber('PK', {
    message: 'Invalid phone number. Valid phone number sample +923346747952',
  })
  @IsNotEmpty()
  phoneNumber: string;

  @MinLength(8)
  @IsNotEmpty()
  password: string;
}
