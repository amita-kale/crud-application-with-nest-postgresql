import{Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum department{
    finance="Finance",
    software_department="Software development",
    marketing="Marketing",
    testing="Testing",
}


@Entity('employee')
export class FeedPostEntity{
    @PrimaryGeneratedColumn('uuid')
         id : number;
        
    @Column({ default : '' })
    EmployeeName: string;

    @Column({ default : '' })
    EmployeeAddress: string;

    
    @Column({ type:'enum', enum:department, default :null })
    department:department;

    @Column({ type: 'int' , default: null})
    contact: number;

    @Column({ type: 'int' ,default: null })
    salary: number;

    // @Column({type:'timestamp', default:() => 'CURRENT_TIMESTAMP'})
    //     createdAt : Date;
    @CreateDateColumn()
    createdAt: Date;

}
