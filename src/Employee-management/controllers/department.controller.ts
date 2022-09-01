/* eslint-disable prettier/prettier */
import {  Body, Controller,Delete,Get,  Param,  Patch,  Post} from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
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

  @Delete('post/:id')
  delete(
    @Param('id'
    )
    id: number,
  ): Observable<DeleteResult> {
    return this.departmentService.deletePost(id);
  }

@Patch('details/:id')
updatedetails(
  @Param('id') id: number,
  @Body() departmentPost: DepartmentPost,
): Observable<UpdateResult> {
  return this.departmentService.updatepost(id, departmentPost);
}
}