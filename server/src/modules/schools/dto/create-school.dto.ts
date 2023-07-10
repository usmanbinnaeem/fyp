import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateSchoolDto {
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
  profileImage: string;
}
