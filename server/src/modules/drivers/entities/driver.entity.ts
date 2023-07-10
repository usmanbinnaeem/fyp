import { Vehicle } from '../../vehicles/entities/vehicle.entity';
import { BaseEntity } from '../../base.entity';
import { User } from '../../users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { School } from '../../schools/entities/school.entity';

@Entity()
export class Driver extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  cnic: string;

  @Column({ nullable: false })
  licenseNo: string;

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
  approved: boolean;

  @Column({ nullable: true })
  profileImageUrl: string;

  @Column({ nullable: true })
  licenseImageUrl: string;

  @OneToOne(() => Vehicle, (vehicle) => vehicle.driver)
  vehicle: Vehicle;

  @ManyToMany(() => School, (school) => school.drivers)
  @JoinTable()
  schools: School[];

  @OneToOne(() => User, (user) => user.driver)
  @JoinColumn()
  user: User;
}
