import { Module } from '@nestjs/common';
import { FlightMService } from './flight-m.service';
import { FlightMController } from './flight-m.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlightM } from './entities/flight-m.entity';

@Module({
  imports:[TypeOrmModule.forFeature([FlightM])],
  controllers:[FlightMController],
  providers:[FlightMService],
})
export class FlightMModule {}