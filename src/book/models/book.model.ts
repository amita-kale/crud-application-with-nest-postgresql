import {
  IsDefined,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class BookModel {
  @IsNotEmpty() @IsInt() book_id: number;
  @IsNotEmpty() @IsString() book_name: string;
  @IsNotEmpty() @IsString() author: string;
  @IsNotEmpty() @IsInt() price: number;

  // book_image?: string;
  @IsNotEmpty() @IsString() book_isbn: string;
}
