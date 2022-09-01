import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateAddressDto {
  @IsOptional()
  @IsNotEmpty()
  street:string;
  
  @IsOptional()
  @IsNotEmpty()
  city: string;

  @IsOptional()
  @IsNotEmpty()
  country: string;
}