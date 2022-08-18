import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import {} from '../models/product.entity';
import { ProductPost } from '../models/product.interface';
// import { ProductPost } from '../models/product.entity';
//import {} from '../models/product.interface'
import { ProductService } from '../services/product.service';
import { CreateUserModel } from '../models/productModel';

@Controller('feed')
export class ProductController {
  constructor(private ProductService: ProductService) {}
  @Post()
  create(@Body() productPost:CreateUserModel): Observable<ProductPost> {
    return this.ProductService.createPost(productPost);
  }
  @Get('/allData')
  findPost(): Observable<ProductPost[]> {
    return this.ProductService.findAllPost();
  }
  @Get(':id')
  findPostId(@Param('id',new ParseUUIDPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE})) id:number):Observable<ProductPost>{
    return this.ProductService.findById(id);
  }
  @Get()
  findPostQuery(@Query('id',new ParseUUIDPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE}))id:number):Observable<ProductPost>{
    return this.ProductService.findByQuery(id)
  }
  @Put(':id')
  updatePost(
    @Param('id',new ParseUUIDPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE})) id: number,
    @Body() productPost:CreateUserModel,
  ): Observable<UpdateResult> {
    return this.ProductService.updateData(id, productPost);
  }
  @Patch(':id')
    updateSomeData(@Param('id',new ParseUUIDPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE}))id:number,@Body()feedPost:ProductPost):Observable<UpdateResult>{
        return this.ProductService.updateSomeData(id,feedPost)
    }
    @Delete(':id')
    deletePost(@Param('id',new ParseUUIDPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE}))id:number):Observable<DeleteResult>{
        return this.ProductService.DeleteData(id)
    }
}