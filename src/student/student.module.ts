import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentPostEntity } from './models/post.entity';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
  imports: [TypeOrmModule.forFeature([StudentPostEntity])],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
