import { Injectable } from '@nestjs/common';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { Driver } from './entities/driver.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { from } from 'rxjs';

@Injectable()
export class DriversService {
  constructor(
    @InjectRepository(Driver) private repository: Repository<Driver>,
  ) {}

  create(createDriverDto: CreateDriverDto) {
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

  async update(id: number, updateDriverDto: UpdateDriverDto) {
    return await this.repository.update({ id }, updateDriverDto);
  }

  async remove(id: number) {
    await this.repository.delete(id);
    return {
      success: true,
    };
  }
}
