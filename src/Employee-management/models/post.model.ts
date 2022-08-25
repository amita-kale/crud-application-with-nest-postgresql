/* eslint-disable prettier/prettier */
import {  IsInt, IsNotEmpty, IsString, } from "class-validator";



export class CreateEmpModel{
    
    @IsInt()
    EmployeeName:number;

    @IsNotEmpty()
    @IsString()
    EmployeeAddress: string;
    
    @IsNotEmpty()
    @IsInt()
    contact: number;

    @IsNotEmpty()
    @IsInt()
    salary: number;
    
    // @IsNotEmpty()
    // image:string;

    @IsNotEmpty()
    @IsString()
    email: string;
   
}
