// import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class Book {
  book_id: number;
  book_name: string;
  author: string;
  price: number;
  book_image: string;
  book_isbn: string;

  // @IsNotEmpty() @IsInt() book_id: string;
  // @IsNotEmpty() @IsString() book_name: string;
  // @IsNotEmpty() @IsString() author: number;
  // @IsNotEmpty() @IsInt() price: number;
  // @IsNotEmpty() @IsString() book_image: string;
  // @IsNotEmpty() @IsString() book_isbn: string;
}
