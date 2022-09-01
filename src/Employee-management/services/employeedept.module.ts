/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeDeptController } from '../controllers/employeedept.controller';
import { EmployeeDeptEntity } from '../models/employeedept.entity';
import { EmployeeDeptService } from './employeedept.service';


@Module({
  imports:[TypeOrmModule.forFeature([EmployeeDeptEntity ])],
  providers: [EmployeeDeptService],
  controllers: [EmployeeDeptController],
  //exports:[TypeOrmModule.forFeature([EmployeeDeptEntity])]
})
export class EmployeeDeptModule {}