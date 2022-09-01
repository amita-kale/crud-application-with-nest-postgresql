import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';

import { Repository, UpdateResult } from 'typeorm';
import { CreateFlightMDto } from './dto/create-flight-m.dto';
import { PatchFlight } from './dto/flight.patch';
import { FlightM } from './entities/flight-m.entity';
import { Flightinterface } from './entities/flight-m.interface';

@Injectable()
export class FlightMService {
  // imagepath: string;
  constructor(
    @InjectRepository(FlightM)
    private readonly flightRepository: Repository<FlightM>,
  ) {}

  //-----------------------POST API-----------------------------------------------

  create(CreateFlightMDto: CreateFlightMDto): Promise<FlightM> {
    return this.flightRepository.save(CreateFlightMDto);
  }

  findAll(): Promise<FlightM[]> {
    return this.flightRepository.find();
  }

  findOne(id: number): Observable<Flightinterface> {
    const ticket = id;
    return from(this.flightRepository.findOneBy({ ticket }));
  }

  updateAll(
    ticket: number,
    patchFlight: PatchFlight,
  ): Observable<UpdateResult> {
    return from(this.flightRepository.update(ticket, patchFlight));
  }

  updatedata(
    ticket: number,
    patchFlight: PatchFlight,
  ): Observable<UpdateResult> {
    return from(this.flightRepository.update(ticket, patchFlight));
  }

  remove(ticket: number) {
    return this.flightRepository.delete(ticket);
  }
}
