/* eslint-disable prettier/prettier */
import {  Body, Controller,Get,  Post} from '@nestjs/common';
import { Observable } from 'rxjs';
import { EmployeeDeptPost } from '../models/employeedept.interface';
import { EmployeeDeptService } from '../services/employeedept.service';

@Controller('employeedepartment')
export class EmployeeDeptController {
    constructor(private employeedeptService: EmployeeDeptService) {};

    @Post('/post')
    create(@Body() empdept: EmployeeDeptPost): Observable<EmployeeDeptPost> {
      return this.employeedeptService.createDepartment(empdept);
    }

    @Get('/post')
   findDepartment(): Observable<EmployeeDeptPost[]>{
    return this.employeedeptService.findAllDepartments();
  }
}