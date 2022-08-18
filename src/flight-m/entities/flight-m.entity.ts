import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsNotEmpty, IsString, IsInt } from 'class-validator';
@Entity()
export class FlightM {
  @PrimaryGeneratedColumn()
  @IsInt()
  ticket: number;
  @Column()
  @IsString()
  @IsNotEmpty()
  passenger: String;
  @Column()
  @IsString()
  @IsNotEmpty()
  Destination: String;

  @CreateDateColumn({ nullable: true })
  createdAt: Date;
  @CreateDateColumn({ nullable: true })
  updatedAt: Date;
}
