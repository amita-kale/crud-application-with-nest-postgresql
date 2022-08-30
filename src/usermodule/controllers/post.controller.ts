import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
  } from '@nestjs/common';
  import { ApiTags } from '@nestjs/swagger';

 import { PostService } from '../services/post.service';
  @ApiTags('Posts')
  @Controller('posts')
  
  
  export class PostController {
    constructor(private readonly postService: PostService) {}
  
    @Get()
    getPosts() {
      return this.postService.getPosts();
    }
  
    @Get(':id')
    findPostsById(@Param('id', ParseIntPipe) id: number) {
      return this.postService.findPostById(id);
    }
  }