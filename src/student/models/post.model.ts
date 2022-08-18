import {
    IsEmail, IsInt, IsNotEmpty, IsString, }
from "class-validator";
// import { ProductData, ProductSize } from "./product.entity";
export class ValidateStudentModel {
    @IsNotEmpty() @IsString() full_name: string;
    @IsNotEmpty() @IsEmail() email: string;
    @IsNotEmpty() @IsInt() contact: number;
    @IsNotEmpty() @IsString() address: string;
    @IsNotEmpty() @IsString() student_profile: string;


    // @IsNotEmpty() @IsEnum(ProductData)
    // stock:ProductData;
    // @IsNotEmpty()
    // @IsEnum(ProductSize)
    // size:ProductSize;
    // @IsNotEmpty() image: string;
}
