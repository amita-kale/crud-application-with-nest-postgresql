import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudSubjectEntity } from 'src/student/models/subject.entity';
import { SubjectController } from './subject.controller';
import { SubjectService } from './subject.service';

@Module({
  imports: [TypeOrmModule.forFeature([StudSubjectEntity])],
  controllers: [SubjectController],
  providers: [SubjectService],
})
export class SubjectModule {}
