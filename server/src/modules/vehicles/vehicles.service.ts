import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Vehicle } from './entities/vehicle.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle) private repository: Repository<Vehicle>,
  ) {}
  create(createVehicleDto: CreateVehicleDto) {
    return this.repository.save(createVehicleDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.find({
      where: { id },
    });
  }

  async update(id: number, updateVehicleDto: UpdateVehicleDto) {
    return await this.repository.update({ id }, updateVehicleDto);
  }

  async remove(id: number) {
    await this.repository.delete(id);
    return {
      success: true,
    };
  }
}
