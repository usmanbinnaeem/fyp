import { IsNotEmpty, IsOptional } from 'class-validator';
import { Driver } from '../../drivers/entities/driver.entity';

export class CreateVehicleDto {
  @IsNotEmpty()
  regNo: string;

  @IsNotEmpty()
  seats_capacity: string;

  @IsOptional()
  booked_seats: string;

  @IsOptional()
  color: string;

  @IsOptional()
  modal: string;

  @IsOptional()
  verified: string;

  @IsOptional()
  driver: Driver;
}
