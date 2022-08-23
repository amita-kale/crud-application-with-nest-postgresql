/* eslint-disable prettier/prettier */

import {  Body, Controller, Delete, Get, Param, Post, Put, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { EmpPost } from '../models/post.interface';
import { EmpService } from '../services/employee.service';
@Controller('emp')
export class EmpController {
  image_path: string;
  constructor(private empService: EmpService) {}
  @Post()
  create(@Body() post: EmpPost): Observable<EmpPost> {
    return this.empService.createPost(post);
  }
//to get all details path http://localhost:3000/emp/details
  @Get('/details')
  findPost(): Observable<EmpPost[]>{
    return this.empService.findAllPosts();
  }


  @Get(':id')
  findPostId(
    @Param('id')id:string
    ): Observable<EmpPost> {
    return this.empService.findById(id);
  }

  // @Get()
  // findSelected(
  //   @Query('take') take = 1,
  //   @Query('skip') skip = 1,
  // ): Observable<EmpPost[]> {
  //   take = take > 20 ? 20 : take;
  //   return this.empService.findPosts(take, skip);
  // }

  @Put(':id')
  update(
    @Param(
      'id'
    )
    id: string,
    @Body() empPost: EmpPost,
  ): Observable<UpdateResult> {
    return this.empService.updatePost(id, empPost);
  }

  @Delete(':id')
  delete(
    @Param('id'
    )
    id: string,
  ): Observable<DeleteResult> {
    return this.empService.deletePost(id);
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
          const filename = `${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  handleupload(@UploadedFile() image: Express.Multer.File) {
    this.image_path = image.path;
    console.log('image', image);
    console.log('path', image.path);
    return 'file upload API' + this.image_path;
  }
  @Get('showimage/:image')
  seeUploadedFile(@Param('image') image, @Res() res) {
    return res.sendFile(image, { root: './images' });
  }
}
