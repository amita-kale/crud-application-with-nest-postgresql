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
    constructor(@InjectRepository(StudentPostEntity) private readonly feedPostRepository: Repository<StudentPostEntity > ) {}

    createPost(studentPost: StudentPost):Observable<StudentPost > {
        return from(this.feedPostRepository.save(studentPost));
    }

    findAllPosts():Observable<StudentPost[] > {
        return from(this.feedPostRepository.find());
    }

    updatePutPost(id: number, studentPost: StudentPost):Observable<UpdateResult > {
        return from(this.feedPostRepository.update(id, studentPost));
    }

    updatePatchPost(id: number, studentPost: StudentPost):Observable<UpdateResult > {
        return from(this.feedPostRepository.update(id, studentPost));
    }

    deletePost(id: number):Observable<DeleteResult > {
        return from(this.feedPostRepository.delete(id));
    }
}
