import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsNotEmpty, IsString, IsInt } from 'class-validator';
@Entity('FlightM')
export class FlightM {
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
}
