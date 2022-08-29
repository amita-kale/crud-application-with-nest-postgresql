import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { StudSubjectEntity } from 'src/student/models/subject.entity';
import { SubjectInterface } from 'src/student/models/subject.interface';
import { Repository } from 'typeorm';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(StudSubjectEntity)
    private readonly studSubjectEntityRepository: Repository<StudSubjectEntity>,
  ) {}

  // createSubject(
  //   subjectInterface: SubjectInterface,
  // ): Observable<SubjectInterface> {
  //   return from(this.studSubjectEntityRepository.save(subjectInterface));
  // }

  findAllsubjects(): Observable<SubjectInterface[]> {
    return from(this.studSubjectEntityRepository.find());
  }
}
