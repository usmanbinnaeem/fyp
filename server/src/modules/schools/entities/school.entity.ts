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

  @Column({ nullable: true })
  address_line_1: string;

  @Column({ nullable: true })
  address_line_2: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  state: string;

  @Column({ nullable: true })
  zip: string;

  @Column({ nullable: true })
  profileImage: string;

  @OneToMany(() => Student, (student) => student.school, {
    onDelete: 'CASCADE',
  })
  students: Student[];

  @ManyToMany(() => Driver, (driver) => driver.schools)
  drivers: Driver[];
}
