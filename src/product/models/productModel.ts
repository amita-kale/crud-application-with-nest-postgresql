import { IsEnum, IsInt, IsNotEmpty, IsString, } from "class-validator";
import { ProductData, ProductSize } from "./product.entity";


export class CreateUserModel{
    @IsNotEmpty()
    @IsString()
    productName:string;

    @IsNotEmpty()
    @IsInt()
    price:number;
   

    @IsNotEmpty()
    @IsEnum(ProductData)
    stock:ProductData;

    @IsNotEmpty()
    @IsEnum(ProductSize)
    size:ProductSize;

    @IsNotEmpty()
    image:string;
}
