/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpController } from '../controllers/employee.controller';
import { EmpPostEntity } from '../models/post.entity';
import { EmpService } from './employee.service';

@Module({
  imports:[TypeOrmModule.forFeature([EmpPostEntity])],
  providers: [EmpService],
  controllers: [EmpController],
})
export class EmpModule {}
 