
   import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

  export class CreateGenreDto {
    @IsOptional()
    @IsNotEmpty()
    @MinLength(3)
    name:string;
    
  
    // @IsOptional()
    // @IsNotEmpty()
    // @IsEmail()
    // user_email: string;
  }