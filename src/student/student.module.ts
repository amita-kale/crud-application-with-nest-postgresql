import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentPostEntity } from './models/post.entity';
import { StudSubjectRefEntity } from './models/student-subref.entity';

import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([StudentPostEntity, StudSubjectRefEntity]),
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
