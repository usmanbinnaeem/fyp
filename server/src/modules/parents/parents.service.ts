import { Injectable } from '@nestjs/common';
import { CreateParentDto } from './dto/create-parent.dto';
import { UpdateParentDto } from './dto/update-parent.dto';
import { Parent } from './entities/parent.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { from } from 'rxjs';

@Injectable()
export class ParentsService {
  constructor(
    @InjectRepository(Parent) private repository: Repository<Parent>,
  ) {}

  create(createParentDto: CreateParentDto) {
    return this.repository.save(createParentDto);
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

  async update(id: number, updateParentDto: UpdateParentDto) {
    return await this.repository.update({ id }, updateParentDto);
  }

  async remove(id: number) {
    await this.repository.delete(id);
    return {
      success: true,
    };
  }
}
