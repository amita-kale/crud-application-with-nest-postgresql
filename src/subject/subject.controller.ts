import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { SubjectInterface } from 'src/student/models/subject.interface';
import { SubjectService } from './subject.service';

@Controller('subject')
export class SubjectController {
  constructor(private subjectService: SubjectService) {}

  // @Post() create(
  //   @Body() subjectInterface: SubjectInterface,
  // ): Observable<SubjectInterface> {
  //   // validateStudentModel.student_profile = this.imagepath;
  //   return this.subjectService.createSubject(subjectInterface);
  // }

  @Get() findAll(): Observable<SubjectInterface[]> {
    return this.subjectService.findAllsubjects();
  }
}
