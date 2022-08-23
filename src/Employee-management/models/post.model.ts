/* eslint-disable prettier/prettier */
import { IsEnum, IsInt, IsNotEmpty, IsString, } from "class-validator";
import { department } from "./post.entity";


export class CreateEmpModel{
    @IsNotEmpty()
    @IsString()
    EmployeeName:string;

    @IsNotEmpty()
    @IsString()
    EmployeeAddress: string;
    
    @IsNotEmpty()
    @IsInt()
    contact: number;

    @IsNotEmpty()
    @IsInt()
    salary?: number;
    
    @IsNotEmpty()
    image:string;

    @IsNotEmpty()
    @IsEnum(department)
    dept:department;
   
}
