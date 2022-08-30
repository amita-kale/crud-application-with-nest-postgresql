import { IsNotEmpty, IsString } from "class-validator";
export class ProductCategoryModel{
    
    @IsNotEmpty()
    @IsString()
    size:string;
}






