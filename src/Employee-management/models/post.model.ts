/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty, IsString } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreateEmpModel{
    @IsInt()
    id: number;

    
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
    salary: number;
    
    // @IsNotEmpty()
    // image:string;

    // @IsNotEmpty()
    // @IsString()
    // email: string;
    // @ManyToMany(()=>DepartmentPostEntity,(department:DepartmentPostEntity)=>department.employeedata)
    // @JoinTable()
    // department:DepartmentPostEntity[];

   
}
