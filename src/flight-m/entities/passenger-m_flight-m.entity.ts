import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('PassengerAndFlight')
export class PassengerAndFlight {
  @PrimaryGeneratedColumn()
  ticket: number;
}
