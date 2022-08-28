import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudSubjectEntity } from 'src/student/models/subject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StudSubjectEntity])],
  //   controllers: [StudentController],
  //   providers: [StudentService],
})
export class SubjectModule {}
