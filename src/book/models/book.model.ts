import { IsDefined, IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class BookModel {
  @IsNotEmpty() @IsInt() book_id: number;
  @IsNotEmpty() @IsString() book_name: string;
  @IsNotEmpty() @IsString() author: string;
  @IsNotEmpty() @IsInt() price: number;
  // @IsNotEmpty() @IsString()
   book_image?: string;
  @IsNotEmpty() @IsString() book_isbn: string;


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