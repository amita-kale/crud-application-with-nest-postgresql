import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FlightMService } from './flight-m.service';
import { CreateFlightMDto } from './dto/create-flight-m.dto';
import { UpdateFlightMDto } from './dto/update-flight-m.dto';

@Controller('flight-m')
export class FlightMController {
  constructor(private readonly flightMService: FlightMService) {}

  @Post()
  create(@Body() createFlightMDto: CreateFlightMDto) {
    return this.flightMService.create(createFlightMDto);
  }

  @Get()
  findAll() {
    return this.flightMService.findAll();
  }

  @Get(':ticket')
  findOne(@Param('ticket') ticket: String) {
    return this.flightMService.findOne(+ticket);
  }

  @Patch(':ticket')
  update(@Param('ticket') ticket: string, @Body() updateFlightMDto: UpdateFlightMDto) {
    return this.flightMService.update(+ticket, updateFlightMDto);
  }

  @Delete(':ticket')
  remove(@Param('ticket') ticket: string) {
    return this.flightMService.remove(+ticket);
  }
}
