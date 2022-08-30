/* eslint-disable prettier/prettier */

import {  IsInt, IsNotEmpty, IsString, } from "class-validator";

export class CreateDepartmentModel{
    @IsInt()
    id: number;

    
    @IsNotEmpty()
    @IsString()
    department:string;

    // @ManyToMany(() =>EmpPostEntity,(employeedata:EmpPostEntity)=>employeedata.department)
    // // @JoinTable()
    // employeedata:EmpPostEntity;
}