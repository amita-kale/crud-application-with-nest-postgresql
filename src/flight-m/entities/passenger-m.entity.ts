import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsString, IsInt } from 'class-validator';
import { FlightM } from './flight-m.entity';
@Entity('PassengerM')
export class PassengerM {
  @PrimaryGeneratedColumn()
  @IsInt()
  ticket: number;

  @Column()
  @IsString()
  passenger: string;

  @Column()
  @IsString()
  Destination: string;

  // @Column()
  // Image: string;

  // @CreateDateColumn({ nullable: true })
  // createdAt: Date;
  // @CreateDateColumn({ nullable: true })
  // updatedAt: Date;
  @ManyToMany(() => FlightM, (category: FlightM) => category.passenger)
  @JoinTable({ name: 'PassengerAndFlight' })
  category: FlightM[];
}
