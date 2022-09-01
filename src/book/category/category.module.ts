import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from './category.controller';
import { BookCategoryEntity } from './category.entity';
import { CategoryService } from './category.service';



@Module({
  imports:[
    TypeOrmModule.forFeature([BookCategoryEntity])
  ],
  providers: [CategoryService],
  controllers: [CategoryController]
})
export class CategoryModule {}