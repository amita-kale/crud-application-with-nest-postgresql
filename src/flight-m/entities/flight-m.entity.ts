import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PassengerM } from './passenger-m.entity';
@Entity('FlightM')
export class FlightM {
  @PrimaryGeneratedColumn()
  ticket: number;
  @Column()
  from: string;
  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createAt: Date;
  @Column()
  flightCompany: string;

  @ManyToMany(() => PassengerM, (passenger: PassengerM) => passenger.category)
  passenger: PassengerM[];
  // @Column({ type: 'timestamptz' }) // Recommended
  //   date_time_with_timezone: Date;
}
