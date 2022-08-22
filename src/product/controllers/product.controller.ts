import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import {} from '../models/product.entity';
import { ProductPost } from '../models/product.interface';
import { ProductService } from '../services/product.service';
import { CreateUserModel } from '../models/productModel';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('product')
export class ProductController {
  imagepath: string;
  constructor(private ProductService: ProductService) {}
  @Post()
  create(@Body() productPost: CreateUserModel): Observable<ProductPost> {
    return this.ProductService.createPost(productPost);
  }
  @Get('/allData')
  findPost(): Observable<ProductPost[]> {
    return this.ProductService.findAllPost();
  }
  @Get(':id')
  findPostId(@Param('id') id: string): Observable<ProductPost> {
    return this.ProductService.findById(id);
  }
  @Get()
  findPostQuery(@Query('id') id: string): Observable<ProductPost> {
    return this.ProductService.findByQuery(id);
  }
  @Put(':id')
  updatePost(
    @Param('id') id: string,
    @Body() productPost: CreateUserModel,
  ): Observable<UpdateResult> {
    return this.ProductService.updateData(id, productPost);
  }
  @Patch(':id')
  updateSomeData(
    @Param('id') id: string,
    @Body() feedPost: ProductPost,
  ): Observable<UpdateResult> {
    return this.ProductService.updateSomeData(id, feedPost);
  }
  @Delete(':id')
  deletePost(@Param('id') id: string): Observable<DeleteResult> {
    return this.ProductService.DeleteData(id);
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
    this.imagepath = image.path;
    console.log('image', image);
    console.log('path', image.path);
    return 'file upload API';
  }
  @Get('image/:imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: './images' });
  }
}
