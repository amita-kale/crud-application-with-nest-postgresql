/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('employeedepartment')
export class EmployeeDeptEntity{

@PrimaryGeneratedColumn()
id: number;


@Column()
employeeId: number;

@Column()
departmentId: number;

    
}