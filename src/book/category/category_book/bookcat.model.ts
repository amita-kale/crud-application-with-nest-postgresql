import {  IsInt, IsNotEmpty,  IsString, MaxLength, MinLength } from 'class-validator';

export class BookCatModel {
  // @IsNotEmpty() @IsInt()
  // id: number;

@IsNotEmpty()
  book:number;
 

@IsNotEmpty()
  category:number;

}