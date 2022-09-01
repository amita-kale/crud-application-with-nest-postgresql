/* eslint-disable prettier/prettier */
import {  Body, Controller,Get,  Post} from '@nestjs/common';
import { Observable } from 'rxjs';
import { EmployeeDeptPost } from '../models/employeedept.interface';
import { EmployeeDeptService } from '../services/employeedept.service';

@Controller('employeedepartment')
export class EmployeeDeptController {
    constructor(private employeedeptService: EmployeeDeptService) {};

    @Post('/empdept')
    createdata(@Body() empdept: EmployeeDeptPost): Observable<EmployeeDeptPost> {
      return this.employeedeptService.createEmployeeDept(empdept);
    }

    @Get('/empdept')
   findEmployeeDept(): Observable<EmployeeDeptPost[]>{
    return this.employeedeptService.findAllEmployeeDept();
  }
}