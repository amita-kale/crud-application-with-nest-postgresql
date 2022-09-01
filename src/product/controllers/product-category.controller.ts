import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ProductPostCategory } from '../models/product-category.entity';
import { ProductPostCategoryInterface } from '../models/product-category.interface';
import { ProductCategoryModel } from '../models/product-category.model';
import { ProductCategoryService } from '../services/product-category.service';
@Controller('products')
export class ProductCategoryController {
  constructor(private ProductCategoryService: ProductCategoryService) {}
  @Post('/create')
  create(
    @Body() productPost:ProductCategoryModel,
  ): Observable<ProductPostCategoryInterface> {
    return this.ProductCategoryService.createProductCategory(productPost);
  }
  @Get('/allData')
  findProductCategory():Observable<ProductPostCategoryInterface[]>{
    return this.ProductCategoryService.getProductCategory()
  }
 
}