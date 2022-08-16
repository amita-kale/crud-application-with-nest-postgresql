import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class FlightM {
    @PrimaryGeneratedColumn()
    ticket: number;
    @Column()
    passenger:String;
    @Column()
    Destination:String;

    @CreateDateColumn({ nullable: true })
    createdAt: Date;
    @CreateDateColumn({ nullable: true })
    updatedAt: Date;
  }



