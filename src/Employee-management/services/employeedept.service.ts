/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import {  Repository  } from 'typeorm';
import { EmployeeDeptEntity } from '../models/employeedept.entity';
import { EmployeeDeptPost } from '../models/employeedept.interface';
@Injectable()
export class EmployeeDeptService {

    constructor(
        @InjectRepository(EmployeeDeptEntity)
        private readonly EmployeedeptRepository: Repository<EmployeeDeptEntity>
    ){}

    createDepartment(employeedeptPost: EmployeeDeptPost): Observable<EmployeeDeptPost>{
        return from(this.EmployeedeptRepository.save(employeedeptPost));
    }

    findAllDepartments(): Observable<EmployeeDeptPost[]>{
        return from(this.EmployeedeptRepository.find());
    }

}