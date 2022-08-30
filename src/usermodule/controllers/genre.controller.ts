import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
  } from '@nestjs/common';
  import { ApiTags } from '@nestjs/swagger';

 import { GenreService } from '../services/genre.service';
  @ApiTags('Category')
  @Controller('category')
  
  
  export class GenreController {
    constructor(private readonly genreService: GenreService) {}
  
    @Get()
    getCategory() {
      return this.genreService.getCategory();
    }
  
    @Get(':id')
    getCategoryByIds(@Param('id', ParseIntPipe) id) {
      return this.genreService.getCategoryByIds(id);
    }
  }