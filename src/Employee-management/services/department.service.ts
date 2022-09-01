/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { DepartmentPostEntity } from '../models/department.entity';
import { DepartmentPost } from '../models/department.interface';
@Injectable()
export class DepartmentService {

    constructor(
        @InjectRepository(DepartmentPostEntity)
        private readonly departmentPostRepository: Repository<DepartmentPostEntity>
    ){}

    createDepartment(departmentPost: DepartmentPost): Observable<DepartmentPost>{
        return from(this.departmentPostRepository.save(departmentPost));
    }

    findAllDepartments(): Observable<DepartmentPost[]>{
        return from(this.departmentPostRepository.find());
    }

}