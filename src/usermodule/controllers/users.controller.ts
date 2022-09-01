import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,

  Patch,
  Post,
  Put,
  Res,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { extname } from 'path';
import { CreateUserDto } from '../dtos/CreateUser.dtos';
import { UsersService } from '../services/users.service';
import { diskStorage } from 'multer';
@ApiTags('Users')
@Controller('users')


export class UsersController {
  imagepath: string;
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  findUsersById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findUsersById(id);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createUsers(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Delete('delete/:id')
  deleteUser(@Param('id') id) {
    return this.userService.delete(id);
  }

  @Patch(':id')
  updateUser(@Param('id') id: any, @Body() createUserDto) {
    return this.userService.updateUser(+id, createUserDto);
  }
  @Put(':id')
  updateAllUser(@Param('id') id: any, @Body() createUserDto) {
    return this.userService.updateAllUser(+id, createUserDto);
  }
  @Post('image')
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
    return 'file upload API'+this.imagepath ;
  }
  @Get('showimage/:image')
  seeUploadedFile(@Param('image') image, @Res() res) {
    return res.sendFile(image, { root: './images' });
  }

  
}

