import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { IamModule } from './modules/iam/iam.module';
import { DriversModule } from './modules/drivers/drivers.module';
import { SchoolsModule } from './modules/schools/schools.module';
import { StudentsModule } from './modules/students/students.module';
import { ParentsModule } from './modules/parents/parents.module';
import { VehiclesModule } from './modules/vehicles/vehicles.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'test',
      database: 'fyp',
      autoLoadEntities: true,
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    IamModule,
    UsersModule,
    DriversModule,
    SchoolsModule,
    StudentsModule,
    ParentsModule,
    VehiclesModule,
  ],
})
export class AppModule {}
