/* eslint-disable prettier/prettier */

import {  Body, Controller, Delete, Get, Param, Patch, Post, Put} from '@nestjs/common';
// import { FileInterceptor } from '@nestjs/platform-express';
// import { diskStorage } from 'multer';
// import { extname } from 'path';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { EmpPost } from '../models/post.interface';
import { EmpService } from '../services/employee.service';
@Controller('emp')
export class EmpController {
  image_path: string;
  constructor(private empService: EmpService) {}
  @Post('/details')
  create(@Body() post: EmpPost): Observable<EmpPost> {
    return this.empService.createPost(post);
  }
//to get all details path http://localhost:3000/emp/details
  @Get('/details')
  findPost(): Observable<EmpPost[]>{
    return this.empService.findAllPosts();
  }


  @Get('/details/:id')
  findPostId(
    @Param('id')id:number
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

  @Put('/details/:id')
  update(
    @Param(
      'id'
    )
    id: number,
    @Body() empPost: EmpPost,
  ): Observable<UpdateResult> {
    return this.empService.updatePost(id, empPost);
  }

  @Delete('details/:id')
  delete(
    @Param('id'
    )
    id: number,
  ): Observable<DeleteResult> {
    return this.empService.deletePost(id);
  }

@Patch('update/:id')
updatedetails(
  @Param('id') id: number,
  @Body() empPost: EmpPost,
): Observable<UpdateResult> {
  return this.empService.updatedetails(id, empPost);
}

  // @Post('image')
  // @UseInterceptors(
  //   FileInterceptor('image', {
  //     storage: diskStorage({
  //       destination: './images',
  //       filename: (req, image, callback) => {
  //         const uniqueSuffix =
  //           Date.now() + '-' + Math.round(Math.random() * 1e9);
  //         const ext = extname(image.originalname);
  //         const filename = `${uniqueSuffix}${ext}`;
  //         callback(null, filename);
  //       },
  //     }),
  //   }),
  // )
  // handleupload(@UploadedFile() image: Express.Multer.File) {
  //   this.image_path = image.path;
  //   console.log('image', image);
  //   console.log('path', image.path);
  //   return 'file upload API' + this.image_path;
  // }
  // @Get('showimage/:image')
  // seeUploadedFile(@Param('image') image, @Res() res) {
  //   return res.sendFile(image, { root: './images' });
  // }
}


