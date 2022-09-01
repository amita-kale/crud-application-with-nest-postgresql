import {
  Controller,
  Get,
  Put,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Req,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { FlightMService } from './flight-m.service';
import { CreateFlightMDto } from './dto/create-flight-m.dto';
// import { UpdateFlightMDto } from './dto/update-flight-m.dto';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ApiTags } from '@nestjs/swagger';

@Controller('flight-m')
@ApiTags('flight')
export class FlightMController {
  imagepath: any;
  constructor(private readonly flightMService: FlightMService) {}

  @Post()
  create(@Body() createFlightMDto: CreateFlightMDto) {
    // CreateFlightMDto.Image = this.imagepath;
    return this.flightMService.create(createFlightMDto);
  }

  @Get()
  findAll() {
    return this.flightMService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.flightMService.findOne(id);
  }

  @Patch(':ticket')
  // @Body() createFlightMDto: CreateFlightMDto
  update(
    @Param('ticket') ticket: number,
    @Body() patchFlight: CreateFlightMDto,
  ) {
    return this.flightMService.updatedata(ticket, patchFlight);
  }

  @Put(':ticket')
  updateput(
    @Param('ticket') ticket: number,
    @Body() patchFlight: CreateFlightMDto,
  ) {
    return this.flightMService.updatedata(ticket, patchFlight);
  }

  @Delete(':ticket')
  remove(@Param('ticket') ticket: number) {
    return this.flightMService.remove(ticket);
  }

  @Post('images')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './images',
        filename: (req, image, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(image.originalname);
          // const filename = `${image.originalname}-${uniqueSuffix}${ext}`;
          const filename = `${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  handleupload(@UploadedFile() image: Express.Multer.File) {
    this.imagepath = image.path;
    console.log('image', image);
    console.log('path', image.path);
    return 'file upload API';
  }
  @Get('/image/:images')
  seeUploadedFile(@Param('image') image, @Req() res) {
    return res.sendFile(image, { root: './images' });
  }
}
