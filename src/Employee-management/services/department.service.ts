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
    deletePost(id: number): Observable<DeleteResult>{
        return from(this.departmentPostRepository.delete(id));
    }
    updatepost(id: number, departmentPost: DepartmentPost): Observable<UpdateResult> {
        return from(this.departmentPostRepository.update(id, departmentPost));
      }

}