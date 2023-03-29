import { Driver } from '../../drivers/entities/driver.entity';
import { BaseEntity } from '../../base.entity';
import { Student } from '../../students/entities/student.entity';
import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';

@Entity()
export class School extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @Column()
  email: string;

  @Column()
  address_line_1: string;

  @Column()
  address_line_2: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  zip: string;

  @OneToMany(() => Student, (student) => student.school, {
    onDelete: 'CASCADE',
  })
  students: Student[];

  @ManyToMany(() => Driver, (driver) => driver.schools)
  drivers: Driver[];
}
