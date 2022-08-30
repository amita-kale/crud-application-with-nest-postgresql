/* eslint-disable prettier/prettier */

import { Entity, PrimaryGeneratedColumn, Column, ManyToMany , JoinTable} from 'typeorm';
import { EmpPostEntity } from '../models/post.entity';
@Entity('department')
export class DepartmentPostEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: ''})
    department: string;

    @ManyToMany(()=>EmpPostEntity,(employeeDetails)=>employeeDetails)
    // @JoinTable()
    employeeDetails:EmpPostEntity[];

    
}