/* eslint-disable prettier/prettier */
import {  Body, Controller,Get,  Post} from '@nestjs/common';
import { Observable } from 'rxjs';
import { DepartmentPost } from '../models/department.interface';
import { DepartmentService } from '../services/department.service';
@Controller('department')
export class DepartmentController {
    constructor(private departmentService: DepartmentService) {};

    @Post('/post')
    create(@Body() dept: DepartmentPost): Observable<DepartmentPost> {
      return this.departmentService.createDepartment(dept);
    }

    @Get('/post')
   findDepartment(): Observable<DepartmentPost[]>{
    return this.departmentService.findAllDepartments();
  }
}