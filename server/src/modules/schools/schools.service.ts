import { Injectable } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { School } from './entities/school.entity';

@Injectable()
export class SchoolsService {
  constructor(
    @InjectRepository(School) private repository: Repository<School>,
  ) {}
  create(createSchoolDto: CreateSchoolDto) {
    return this.repository.save(createSchoolDto);
  }

  findAll(relations = []) {
    return this.repository.find({
      relations,
    });
  }

  findOne(id: number, relations = []) {
    return this.repository.findOne({
      where: { id },
      relations,
    });
  }

  update(id: number, updateSchoolDto: UpdateSchoolDto) {
    return this.repository.update({ id }, updateSchoolDto);
  }

  remove(id: number) {
    this.repository.delete(id);
    return {
      success: true,
    };
  }
}
