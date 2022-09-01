import {  IsInt, IsNotEmpty,  IsString, MaxLength, MinLength } from 'class-validator';
import { ManyToMany } from 'typeorm';
import { BookEntity } from '../models/book.entity';
import { BookCategoryEntity } from './category.entity';

export class CategoryModel {
  @IsNotEmpty() @IsInt()

  categoryId: number;

  @IsNotEmpty()  @IsString()
  @MinLength(3)
  @MaxLength(30) categoryName: string;



    @ManyToMany(()=> BookEntity, 
    (book:BookEntity)=>book.category)
    book:BookEntity[];

}