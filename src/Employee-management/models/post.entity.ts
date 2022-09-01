/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier

// eslint-disable-next-line prettier/prettier
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn , ManyToMany, JoinTable } from "typeorm";
// eslint-disable-next-line prettier/prettier
import {DepartmentPostEntity}  from '../models/department.entity'

@Entity('employee')
export class EmpPostEntity {
  @PrimaryGeneratedColumn()
  id: number;


  @Column({ default: '' , length:50})
  EmployeeName: string;

  @Column({ default: '' })
  EmployeeAddress: string;

  @Column({ type: 'int',unique:true, default: null })
  contact: number;

  @Column({ type: 'int', default: null })
  salary: number;

  @ManyToMany(()=>DepartmentPostEntity,(department)=>department)
  @JoinTable({name : 'employeedepartment'})
  department:DepartmentPostEntity[];

  @CreateDateColumn()
  createdAt: Date;

  // @ManyToMany()
  
}

// export enum department {
//   finance = 'Finance',
//   softwaredevelopment = 'Softwaredevelopment',
//   marketing = 'Marketing',
//   testing = 'Testing',
// }
// @Column({ default: '' })
  // image: string;

  // @Column({ default:''})
  // email: string;