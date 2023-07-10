import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { Driver } from './entities/driver.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { from } from 'rxjs';
import { SchoolsService } from '../schools/schools.service';

@Injectable()
export class DriversService {
  constructor(
    @InjectRepository(Driver) private repository: Repository<Driver>,
    private readonly schoolRepository: SchoolsService,
  ) {}

  create(createDriverDto: CreateDriverDto) {
    console.log(createDriverDto)
    return this.repository.save(createDriverDto);
  }

  findAll(relations = []) {
    return this.repository.find({
      relations,
    });
  }

  findOne(id: number, relations = []) {
    return this.repository.findOne({ where: { id }, relations });
  }

  search(query: string) {
    return from(
      this.repository.find({
        order: { id: 'ASC' },
        where: [
          {
            name: Like(`%${query}%`),
          },
        ],
      }),
    );
  }

  update(id: number, updateDriverDto: UpdateDriverDto) {
    return this.repository.update({ id }, updateDriverDto);
  }

  async remove(id: number) {
    await this.repository.delete(id);
    return {
      success: true,
    };
  }

  async addSchoolToDriver(driverId: number, schoolId: number) {
    const driver = await this.repository.findOne({
      where: { id: driverId },
      relations: ['schools'],
    });
    const school = await this.schoolRepository.findOne(schoolId);

    if (driver && school) {
      driver.schools.push(school);
      return this.repository.save(driver);
    }

    throw new NotFoundException('Driver or school not found');
  }
}
