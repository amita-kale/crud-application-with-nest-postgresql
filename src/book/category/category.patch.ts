import { ApiProperty } from "@nestjs/swagger";
import {  IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class PatchCategory {
    
    @IsNotEmpty() @IsInt() 
    @IsOptional() @ApiProperty ({required: false})
    categoryId?: number;

    @IsNotEmpty() 
    @IsString()
    @MinLength(3)
    @MaxLength(30)
    @IsOptional() @ApiProperty ({required: false})
    categoryName?: string;

}