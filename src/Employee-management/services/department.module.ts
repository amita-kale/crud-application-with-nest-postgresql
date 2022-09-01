/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentController } from '../controllers/department.controller';
import { DepartmentService }  from './department.service';
import { DepartmentPostEntity} from '../models/department.entity';


@Module({
  imports:[TypeOrmModule.forFeature([DepartmentPostEntity])],
  providers: [DepartmentService],
  controllers: [DepartmentController],
  exports:[TypeOrmModule.forFeature([DepartmentPostEntity])]
})
export class DepartmentModule {}