import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudSubjectEntity } from 'src/student/models/student-subref.entity';

@Module({ imports: [TypeOrmModule.forFeature([StudSubjectEntity])] })
export class StudsubrefModule {}
