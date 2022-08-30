import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreatePostDto {
  @IsOptional()
  @IsNotEmpty()
  post_title:string;
  
  @IsOptional()
  @IsNotEmpty()
  post_content: string;

  // @IsOptional()
  // @IsNotEmpty()
  // @IsEmail()
  // user_email: string;
}