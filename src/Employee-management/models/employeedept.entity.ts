/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('employeedepartment')
export class EmployeedeptEntity{

@PrimaryGeneratedColumn()
id: number;


    
}