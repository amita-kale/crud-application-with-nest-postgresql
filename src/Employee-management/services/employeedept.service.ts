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

    createEmployeeDept(employeedeptPost: EmployeeDeptPost): Observable<EmployeeDeptPost>{
        return from(this.EmployeedeptRepository.save(employeedeptPost));
    }

    findAllEmployeeDept(): Observable<EmployeeDeptPost[]>{
        return from(this.EmployeedeptRepository.find());
    }

}