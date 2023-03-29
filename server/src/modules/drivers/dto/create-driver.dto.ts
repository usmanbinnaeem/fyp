import { IsOptional, IsNotEmpty } from 'class-validator';
import { User } from '../../users/entities/user.entity';

export class CreateDriverDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  cnic: string;

  @IsNotEmpty()
  licenseNo: string;

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
  approved: boolean;

  @IsOptional()
  user: User;
}
