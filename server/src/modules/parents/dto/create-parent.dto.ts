import { IsEmail, IsOptional, IsNotEmpty } from 'class-validator';
import { User } from '../../users/entities/user.entity';

export class CreateParentDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  address_line_1: string;

  @IsOptional()
  address_line_2: string;

  @IsOptional()
  city: string;

  @IsOptional()
  state: string;

  @IsOptional()
  zip: string;

  @IsOptional()
  user: User;
}
