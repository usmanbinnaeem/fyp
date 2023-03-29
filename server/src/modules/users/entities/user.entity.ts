import { Column, Entity, OneToOne } from 'typeorm';
import { Role } from '../enum/role.enum';
import { Driver } from '../../drivers/entities/driver.entity';
import { Parent } from '../../parents/entities/parent.entity';
import { BaseEntity } from '../../base.entity';

@Entity()
export class User extends BaseEntity {
  @Column({ unique: true })
  phoneNumber: string;

  @Column({ enum: Role })
  role: Role;

  @Column()
  password: string;

  @Column({ nullable: true })
  verified: boolean;

  @OneToOne(() => Driver, (driver) => driver.user)
  driver: Driver;

  @OneToOne(() => Parent, (parent) => parent.user)
  parent: Parent;
}
