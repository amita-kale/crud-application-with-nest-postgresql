import {  IsInt, IsNotEmpty,  IsString, MaxLength, MinLength } from 'class-validator';
import { ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { BookEntity } from '../models/book.entity';
import { BookCategoryEntity } from './category.entity';

export class CategoryModel {
  @IsNotEmpty() @IsInt()
//   @MinLength(1)
//   @MaxLength(6)
  categoryId: number;

  @IsNotEmpty()  @IsString()
  @MinLength(3)
  @MaxLength(30) categoryName: string;

//   recent
//   @ManyToOne(()=> BookCategoryEntity, (category:BookCategoryEntity)=>category.book)
//     category:BookCategoryEntity;

    // bookmodel 1-M
    @ManyToMany(()=> BookEntity, 
    (book:BookEntity)=>book.category)
    book:BookEntity[];
    // @JoinColumn({name:'category_id'})

}