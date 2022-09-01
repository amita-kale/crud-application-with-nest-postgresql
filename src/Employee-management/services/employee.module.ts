/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpController } from '../controllers/employee.controller';
import { EmployeeDeptController } from '../controllers/employeedept.controller';
import { EmployeeDeptEntity } from '../models/employeedept.entity';
import { EmpPostEntity } from '../models/post.entity';
import { EmpService } from './employee.service';
import { EmployeeDeptService } from './employeedept.service';

@Module({
  imports:[TypeOrmModule.forFeature([EmpPostEntity,EmployeeDeptEntity ])],
  providers: [EmpService, EmployeeDeptService],
  controllers: [EmpController, EmployeeDeptController],
  // exports:[TypeOrmModule.forFeature([EmpPostEntity])]
})
export class EmpModule {}
 