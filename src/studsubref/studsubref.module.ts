import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { StudSubjectRefEntity } from 'src/student/models/student-subref.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StudSubjectRefEntity])],
})
export class StudsubrefModule {}
