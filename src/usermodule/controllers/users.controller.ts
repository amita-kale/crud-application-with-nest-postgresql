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
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from '../dtos/CreateUser.dtos';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
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
}
