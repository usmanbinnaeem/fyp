import {
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Role } from '../enum/role.enum';
import { CreateDriverDto } from '../../drivers/dto/create-driver.dto';
import { CreateParentDto } from '../../parents/dto/create-parent.dto';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @IsNotEmpty()
  @IsIn(['driver', 'parent', 'admin'])
  role: Role;

  @IsNotEmpty()
  password: string;

  @IsOptional()
  verified: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateDriverDto)
  driver: CreateDriverDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateParentDto)
  parent: CreateParentDto;
}
