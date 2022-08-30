/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeedeptController } from '../controllers/employeedept.controller';
import { EmployeedeptEntity } from '../models/employeedept.entity';
import { EmployeeDeptService } from './employeedept.service';


@Module({
  imports:[TypeOrmModule.forFeature([EmployeedeptEntity ])],
  providers: [EmployeeDeptService],
  controllers: [EmployeedeptController],
  exports:[TypeOrmModule.forFeature([EmployeedeptEntity])]
})
export class EmployeedeptModule {}