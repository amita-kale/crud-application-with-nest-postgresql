import {
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
export class ValidateStudSubModel {
  // @IsNotEmpty()
  // @IsInt()
  // id: number;
  @IsNotEmpty()
  student: number;
  @IsNotEmpty()
  subject: number;
}
