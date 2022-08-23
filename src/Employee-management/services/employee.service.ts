/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { EmpPostEntity } from '../models/post.entity';
import { EmpPost } from '../models/post.interface';
@Injectable()
export class EmpService {

    constructor(
        @InjectRepository(EmpPostEntity)
        private readonly empPostRepository: Repository<EmpPostEntity>
    ){}

    createPost(empPost: EmpPost): Observable<EmpPost>{
        return from(this.empPostRepository.save(empPost));
    }

    findAllPosts(): Observable<EmpPost[]>{
        return from(this.empPostRepository.find());
    }

    findById(id: string):Observable<EmpPost>{
        return from(this.empPostRepository.findOneBy({id}));
    }
    //added
    // findPosts(take=10, skip=0): Observable<EmpPost[]>{
    //     return from (this.empPostRepository.findAndCount({take,skip}).then(([posts]) => {
    //         return<EmpPost[]>posts;
    //     }), );
    // }

    
    updatePost(id: string, empPost: EmpPost):Observable<UpdateResult>{
        return from(this.empPostRepository.update(id,empPost));
    }



    deletePost(id: string): Observable<DeleteResult>{
        return from(this.empPostRepository.delete(id));
    }
}
