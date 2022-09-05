
import {  IsInt, IsNotEmpty,  IsString, MaxLength, MinLength } from 'class-validator';
import { JoinColumn, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { BookCategoryEntity } from '../category/category.entity';
import { BookEntitys } from './book.entity';

export class BookModel {
  @IsNotEmpty() @IsInt()
 
  book_id: number;

  @IsNotEmpty()  @IsString()
  @MinLength(3)
  @MaxLength(30) book_name: string;
  
 
  @ManyToMany(()=> BookCategoryEntity, (category:BookCategoryEntity)=>category.book)
  category:BookCategoryEntity[];

  @IsNotEmpty() @IsString()
  @MinLength(3)
  @MaxLength(30) author: string;

  @IsNotEmpty() @IsInt()
  
   price: number;

  // @IsNotEmpty() @IsString()
  // @MinLength(4)
  // @MaxLength(50)
  //  book_image: string;

  @IsNotEmpty() @IsString()
  @MinLength(13)
  @MaxLength(13) book_isbn: string;


}
