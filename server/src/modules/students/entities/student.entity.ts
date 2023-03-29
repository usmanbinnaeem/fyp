import { Column, Entity, ManyToOne } from 'typeorm';
import { Vehicle } from '../../vehicles/entities/vehicle.entity';
import { Parent } from '../../parents/entities/parent.entity';
import { School } from '../../schools/entities/school.entity';
import { BaseEntity } from '../../base.entity';

@Entity()
export class Student extends BaseEntity {
  @Column()
  name: string;

  @ManyToOne(() => Parent, (parent) => parent.students)
  parent: Parent;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.students)
  vehicle: Vehicle;

  @ManyToOne(() => School, (school) => school.students)
  school: School;
}
