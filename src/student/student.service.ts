import {
    Injectable
}
from '@nestjs/common';
import {
    InjectRepository
}
from '@nestjs/typeorm';
import {
    from, Observable
}
from 'rxjs';
import {
    DeleteResult, Repository, UpdateResult
}
from 'typeorm';
import {
    StudentPostEntity
}
from './models/post.entity';
import {
    StudentPost
}
from './models/post.interface';

@Injectable() export class StudentService {
    constructor(@InjectRepository(StudentPostEntity) private readonly studentPostRepository: Repository<StudentPostEntity > ) {}

    createPost(studentPost: StudentPost):Observable<StudentPost > {
        return from(this.studentPostRepository.save(studentPost));
    }

    findAllPosts():Observable<StudentPost[] > {
        return from(this.studentPostRepository.find());
    }
    findSpecificStudent(id:number):Observable<StudentPost > {
        return from(this.studentPostRepository.findOneBy({id}))
    }

    updatePutPost(id: number, studentPost: StudentPost):Observable<UpdateResult > {
        return from(this.studentPostRepository.update(id, studentPost));
    }

    updatePatchPost(id: number, studentPost: StudentPost):Observable<UpdateResult > {
        return from(this.studentPostRepository.update(id, studentPost));
    }

    deletePost(id: number):Observable<DeleteResult > {
        return from(this.studentPostRepository.delete(id));
    }
}
