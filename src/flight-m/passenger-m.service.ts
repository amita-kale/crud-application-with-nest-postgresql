import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';

import { Repository, UpdateResult } from 'typeorm';
import { CreatePassengerMDto } from './dto/create-passenger-m.dto';
import { PatchPassenger } from './dto/passenger.patch';
import { PassengerM } from './entities/passenger-m.entity';
import { Passengerinterface } from './entities/passenger-m.interface';

@Injectable()
export class PassengerMService {
  // imagepath: string;
  constructor(
    @InjectRepository(PassengerM)
    private readonly passengerRepository: Repository<PassengerM>,
  ) {}

  //-----------------------POST API-----------------------------------------------

  create(CreatePassengerMDto: CreatePassengerMDto): Promise<PassengerM> {
    return this.passengerRepository.save(CreatePassengerMDto);
  }

  findAll(): Promise<PassengerM[]> {
    return this.passengerRepository.find();
  }

  findOne(id: number): Observable<Passengerinterface> {
    const ticket = id;
    return from(this.passengerRepository.findOneBy({ ticket }));
  }

  updateAll(
    ticket: number,
    patchFlight: PatchPassenger,
  ): Observable<UpdateResult> {
    return from(this.passengerRepository.update(ticket, patchFlight));
  }

  updatedata(
    ticket: number,
    patchFlight: PatchPassenger,
  ): Observable<UpdateResult> {
    return from(this.passengerRepository.update(ticket, patchFlight));
  }

  remove(ticket: number) {
    return this.passengerRepository.delete(ticket);
  }
}
