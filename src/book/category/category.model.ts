import {  IsInt, IsNotEmpty,  IsString, MaxLength, MinLength } from 'class-validator';
import { ManyToMany } from 'typeorm';
import { BookEntitys } from '../models/book.entity';
import { BookCategoryEntity } from './category.entity';

export class CategoryModel {
  @IsNotEmpty() @IsInt()

  categoryId: number;

  @IsNotEmpty()  @IsString()
  @MinLength(3)
  @MaxLength(30) categoryName: string;



    @ManyToMany(()=> BookEntitys, 
    (book:BookEntitys)=>book.category)
    book:BookEntitys[];

}