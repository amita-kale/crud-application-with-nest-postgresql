import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFlightMDto {
  // @IsInt()
  // @IsNotEmpty()
  // ticket: number;
  @IsString()
  @IsNotEmpty()
  from: string;
  @IsString()
  flightCompany: string;
}
