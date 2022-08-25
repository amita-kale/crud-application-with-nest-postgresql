/* eslint-disable prettier/prettier */

import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
// export enum department {
//   finance = 'Finance',
//   softwaredevelopment = 'Softwaredevelopment',
//   marketing = 'Marketing',
//   testing = 'Testing',
// }

@Entity('employee')


export class EmpPostEntity {
  @PrimaryGeneratedColumn()
  id: number;


  @Column({ default: '' })
  EmployeeName: string;

  @Column({ default: '' })
  EmployeeAddress: string;

  // @Column({ default: '' })
  // image: string;

  // @Column({ default:''})
  // email: string;

  @Column({ type: 'int', default: null })
  contact: number;

  @Column({ type: 'int', default: null })
  salary: number;

  @CreateDateColumn()
  createdAt: Date;
}
