import { IsInt, IsString } from 'class-validator';

export class CreateFlightMDto {
  @IsInt()
  ticket: number;
  @IsString()
  passenger: String;
  @IsString()
  Destination: String;
}
