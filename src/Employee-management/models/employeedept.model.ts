/* eslint-disable prettier/prettier */
import {  IsInt, IsNotEmpty, IsString, } from "class-validator";

export class EmployeeDeptModel{
    @IsInt()
    id: number;
}