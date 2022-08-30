/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import {  Repository  } from 'typeorm';
import { EmployeedeptEntity } from '../models/employeedept.entity';
import { EmployeeDeptPost } from '../models/employeedept.interface';
@Injectable()
export class EmployeeDeptService {

    constructor(
        @InjectRepository(EmployeedeptEntity)
        private readonly EmployeedeptRepository: Repository<EmployeedeptEntity>
    ){}

    createDepartment(employeedeptPost: EmployeeDeptPost): Observable<EmployeeDeptPost>{
        return from(this.EmployeedeptRepository.save(employeedeptPost));
    }

    findAllDepartments(): Observable<EmployeeDeptPost[]>{
        return from(this.EmployeedeptRepository.find());
    }

}