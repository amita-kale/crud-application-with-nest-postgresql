/* eslint-disable prettier/prettier */


import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { EmployeeDeptEntity } from '../models/employeedept.entity';
import { EmployeeDeptPost } from '../models/employeedept.interface';
import { EmpPostEntity } from '../models/post.entity';
import { EmpPost } from '../models/post.interface';
@Injectable()
export class EmpService {

    constructor(
        @InjectRepository(EmpPostEntity)
        private readonly empPostRepository: Repository<EmpPostEntity>,
        @InjectRepository(EmployeeDeptEntity)
        private readonly EmployeedeptRepository: Repository<EmployeeDeptEntity>
    ){}

    createPost(empPost: EmpPost): Observable<EmpPost>{
        return from(this.empPostRepository.save(empPost));
    }

    findAllPosts(): Observable<EmpPost[]>{
        return from(this.empPostRepository.find());
    }

    findById(id: number):Observable<EmpPost>{
        return from(this.empPostRepository.findOneBy({id}));
    }
    //added
    // findPosts(take=10, skip=0): Observable<EmpPost[]>{
    //     return from (this.empPostRepository.findAndCount({take,skip}).then(([posts]) => {
    //         return<EmpPost[]>posts;
    //     }), );
    // }

    //somefeilds updation
    updatedetails(id: number, empPost: EmpPost): Observable<UpdateResult> {
        return from(this.empPostRepository.update(id, empPost));
      }

    
    updatePost(id: number, empPost: EmpPost):Observable<UpdateResult>{
        return from(this.empPostRepository.update(id,empPost));
    }
    deletePost(id: number): Observable<DeleteResult>{
        return from(this.empPostRepository.delete(id));
    }

    //for third table
    
    createEmployeeDept(employeedeptPost: EmployeeDeptPost): Observable<EmployeeDeptPost>{
        return from(this.EmployeedeptRepository.save(employeedeptPost));
    }

    findAllEmployeeDept(): Observable<EmployeeDeptPost[]>{
        return from(this.EmployeedeptRepository.find());
    }

}
