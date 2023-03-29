import { Student } from '../../students/entities/student.entity';
import { Driver } from '../../drivers/entities/driver.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from '../../base.entity';

@Entity()
export class Vehicle extends BaseEntity {
  @Column({ nullable: false })
  regNo: string;

  @Column({ nullable: false })
  seats_capacity: string;

  @Column()
  booked_seats: string;

  @Column()
  color: string;

  @Column()
  modal: string;

  @Column()
  verified: string;

  @OneToOne(() => Driver, (driver) => driver.vehicle)
  @JoinColumn()
  driver: Driver;

  @OneToMany(() => Student, (student) => student.vehicle, {
    onDelete: 'CASCADE',
  })
  students: Student[];
}
