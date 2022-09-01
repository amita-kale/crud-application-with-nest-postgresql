// import {
//   IsDefined,
//   IsInt,
//   IsNotEmpty,
//   IsNumber,
//   IsString,
// } from 'class-validator';

// export class BookModel {
//   @IsNotEmpty() @IsInt() book_id: number;
//   @IsNotEmpty() @IsString() book_name: string;
//   @IsNotEmpty() @IsString() author: string;
//   @IsNotEmpty() @IsInt() price: number;

//   // book_image?: string;
//   @IsNotEmpty() @IsString() book_isbn: string;
// }




import {  IsInt, IsNotEmpty,  IsString, MaxLength, MinLength } from 'class-validator';
import { JoinColumn, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { BookCategoryEntity } from '../category/category.entity';
import { BookEntity } from './book.entity';

export class BookModel {
  @IsNotEmpty() @IsInt()
  // @MinLength(1)
  // @MaxLensgth(6)
  book_id: number;

  @IsNotEmpty()  @IsString()
  @MinLength(3)
  @MaxLength(30) book_name: string;
  
  // @OneToMany(()=> BookCategoryEntity, 
  //   (category:BookCategoryEntity)=>category.book)
  //   category:BookCategoryEntity[];
  //   @JoinColumn({name:'category_id'})

  // /recent
  // @OneToMany(()=> BookEntity, 
  //   (book:BookEntity)=>book.category)
  //   book:BookEntity[];
  //   @JoinColumn({name:'category_id'})

  // //category model
  @ManyToMany(()=> BookCategoryEntity, (category:BookCategoryEntity)=>category.book)
  category:BookCategoryEntity[];

  @IsNotEmpty() @IsString()
  @MinLength(3)
  @MaxLength(30) author: string;

  @IsNotEmpty() @IsInt()
  // @MinLength(2)
   price: number;

  @IsNotEmpty() @IsString()
  @MinLength(4)
  @MaxLength(50)
   book_image: string;

  @IsNotEmpty() @IsString()
  @MinLength(13)
  @MaxLength(13) book_isbn: string;


}
// export class PatchBook {
//     // constructor(parameters) {

//     // }

//     // @IsNotEmpty()
//     //  @IsInt()
//      @IsDefined()
//      book_id: number;

//     // @IsNotEmpty()
//     @IsDefined()
//     //  @IsString()
//       book_name?: string;

//     // @IsNotEmpty()
//     @IsDefined()
//     //  @IsString()
//       author?: string;

//     // @IsNotEmpty()
//     //  @IsNumber()
//      @IsDefined()
//       price?: number;

//     // @IsNotEmpty()
//     @IsDefined()
//     //  @IsString() 
//      book_isbn?: string;

//     // @IsNotEmpty()
//     //  @IsString()
//      @IsDefined()
//      book_image?: string;
// }
