import { Module } from '@nestjs/common';
import { PassengerMService } from './passenger-m.service';
import { PassengerMController } from './passenger-m.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassengerM } from './entities/passenger-m.entity';
import { FlightM } from './entities/flight-m.entity';
import { FlightMController } from './flight-m.controller';
import { FlightMService } from './flight-m.service';
import { PassengerAndFlight } from './entities/passenger-m_flight-m.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PassengerM, FlightM, PassengerAndFlight]),
  ],
  controllers: [PassengerMController, FlightMController],
  providers: [PassengerMService, FlightMService],
})
export class PassengerMModule {}
