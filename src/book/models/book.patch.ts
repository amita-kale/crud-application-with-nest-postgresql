// import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class PatchBook {
    // constructor(parameters) {
        
    // }

    // @IsNotEmpty() @IsInt() 
    book_id?: number;
    // @IsNotEmpty() 
    // @IsString()
     book_name?: string;

    // @IsNotEmpty() 
    // @IsString() 
    author?: string;

    // @IsNotEmpty() 
    // @IsInt() 
    price?: number;

    // @IsNotEmpty() 
    // @IsString() 
    // book_image?: string;

    // @IsNotEmpty() 
    // @IsString()
    book_isbn?: string;
}