/* eslint-disable prettier/prettier */
import{Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum department{
    finance="Finance",
    software_department="Software development",
    marketing="Marketing",
    testing="Testing",
}


@Entity('employee')
export class EmpPostEntity{
    @PrimaryGeneratedColumn('uuid')
         id : string;
        
    @Column({ default : '' })
    EmployeeName: string;

    @Column({ default : '' })
    EmployeeAddress: string;

    @Column({ default: '' })
    image: string;

    
    @Column({ type:'enum', enum:department, default :null })
    department:department;

    @Column({ type: 'int' , default: null})
    contact: number;

    @Column({ type: 'int' ,default: null })
    salary: number;

    @CreateDateColumn()
    createdAt: Date;

}
