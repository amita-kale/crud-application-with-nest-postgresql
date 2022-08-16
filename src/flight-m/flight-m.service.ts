import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFlightMDto } from './dto/create-flight-m.dto';
import { UpdateFlightMDto } from './dto/update-flight-m.dto';
import { FlightM } from './entities/flight-m.entity';

@Injectable()
export class FlightMService {
  constructor(
    @InjectRepository(FlightM)
    private readonly flightRepository: Repository<FlightM>,
  ) {}
  create(CreateFlightMDto: CreateFlightMDto): Promise<FlightM> {
    let fli: FlightM = new FlightM();
    //  fli.ticket=CreateFlightMDto.ticket;
    fli.passenger = CreateFlightMDto.passenger;
    fli.Destination = CreateFlightMDto.Destination;
    return this.flightRepository.save(fli);
  }

  findAll(): Promise<FlightM[]> {
    return this.flightRepository.find();
  }

  findOne(ticket: number) {
    return this.flightRepository.findOneBy({ ticket });
  }

  update(ticket: number, UpdateFlightMDto: UpdateFlightMDto) {
    let fli: FlightM = new FlightM();
    // fli.ticket=UpdateFlightMDto.ticket;
    fli.passenger = UpdateFlightMDto.passenger;
    fli.Destination = UpdateFlightMDto.Destination;
    return this.flightRepository.save(fli);
  }

  remove(ticket: number) {
    return this.flightRepository.delete(ticket);
  }
}
