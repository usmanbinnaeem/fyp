import { Student } from '../../students/entities/student.entity';
import { BaseEntity } from '../../base.entity';
import { User } from '../../users/entities/user.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';

@Entity()
export class Parent extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
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
  profileImageUrl: string;

  @OneToOne(() => User, (user) => user.parent)
  @JoinColumn()
  user: User;

  @OneToMany(() => Student, (student) => student.parent, {
    onDelete: 'CASCADE',
  })
  students: Student[];
}
