import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repository: Repository<User>) {}
  create(createUserDto: CreateUserDto) {
    return this.repository.save(createUserDto);
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

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.repository.update({ id }, updateUserDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
