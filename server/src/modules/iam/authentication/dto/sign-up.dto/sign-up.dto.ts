import {
  MinLength,
  IsPhoneNumber,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { Role } from 'src/modules/users/enum/role.enum';

export class SignUpDto {
  @IsPhoneNumber('PK', {
    message: 'Invalid phone number. Valid phone number sample +923346747952',
  })
  @IsNotEmpty()
  phoneNumber: string;

  @MinLength(8)
  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsString()
  role: Role;
}
