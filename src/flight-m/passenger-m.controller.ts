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

import { PassengerMService } from './passenger-m.service';
import { CreatePassengerMDto } from './dto/create-passenger-m.dto';
// import { UpdateFlightMDto } from './dto/update-flight-m.dto';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ApiTags } from '@nestjs/swagger';

@Controller('passenger-m')
@ApiTags('passenger')
export class PassengerMController {
  imagepath: any;
  constructor(private readonly passengerMService: PassengerMService) {}

  @Post()
  create(@Body() createPassengerMDto: CreatePassengerMDto) {
    // CreateFlightMDto.Image = this.imagepath;
    return this.passengerMService.create(createPassengerMDto);
  }

  @Get()
  findAll() {
    return this.passengerMService.findAll(); //get all
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.passengerMService.findOne(id);
  }

  @Patch(':ticket')
  // @Body() createFlightMDto: CreateFlightMDto
  update(
    @Param('ticket') ticket: number,
    @Body() patchFlight: CreatePassengerMDto,
  ) {
    return this.passengerMService.updatedata(ticket, patchFlight);
  }

  @Put(':ticket')
  updateput(
    @Param('ticket') ticket: number,
    @Body() patchFlight: CreatePassengerMDto,
  ) {
    return this.passengerMService.updatedata(ticket, patchFlight);
  }

  @Delete(':ticket')
  remove(@Param('ticket') ticket: number) {
    return this.passengerMService.remove(ticket);
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
