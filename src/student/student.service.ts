import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, identity, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { PatchValidateModel } from './models/patchvalidate.model';
import { StudentPostEntity } from './models/post.entity';
import { StudentPost } from './models/post.interface';
import { ValidateStudentModel } from './models/post.model';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentPostEntity)
    private readonly studentPostRepository: Repository<StudentPostEntity>,
  ) {}

  createPost(
    validateStudentModel: ValidateStudentModel,
  ): Observable<StudentPost> {
    return from(this.studentPostRepository.save(validateStudentModel));
  }

  findAllPosts(): Observable<StudentPost[]> {
    return from(this.studentPostRepository.find());
  }

  findSpecificStudent(id: number): Observable<StudentPost> {
    const student_id = id;
    return from(this.studentPostRepository.findOneBy({ student_id }));
  }

  updatePutPost(
    id: number,
    validateStudentModel: ValidateStudentModel,
  ): Observable<UpdateResult> {
    return from(this.studentPostRepository.update(id, validateStudentModel));
  }

  updatePatchPost(
    id: number,
    patchValidateModel: PatchValidateModel,
  ): Observable<UpdateResult> {
    return from(this.studentPostRepository.update(id, patchValidateModel));
  }

  deletePost(id: number): Observable<DeleteResult> {
    return from(this.studentPostRepository.delete(id));
  }
}
