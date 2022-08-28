import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
// import { ProductData, ProductSize } from "./product.entity";
export class PatchValidateModel {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  full_name: string;
  @IsNotEmpty()
  @IsEmail()
  @IsOptional()
  @ApiProperty({ required: false })
  email: string;
  @IsNotEmpty()
  @IsInt()
  @IsOptional()
  @ApiProperty({ required: false })
  contact: number;
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  address: string;
  // @IsNotEmpty() @IsString() student_profile: string;
}
