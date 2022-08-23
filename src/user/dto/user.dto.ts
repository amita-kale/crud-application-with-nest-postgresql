import { IsDefined, IsEmail, IsNumber, IsString } from 'class-validator';
export class UserDto {
  email: string;
  name: string;
  gender: string;
  mobile_number: number;
  address: string;
  user_id: number;
}









