import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ProductPostCategory } from '../models/product-category.entity';
import { ProductPostCategoryInterface } from '../models/product-category.interface';
import { ProductCategoryModel } from '../models/product-category.model';
// import { ProductCategoryData } from '../models/product-category.model';
//import { ProductCategoryData } from '../models/product-category.model';
// import { ProductPostEntity } from '../models/product.entity';
import { ProductCategoryService } from '../services/product-category.service';
@Controller('product')
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
  @Get(':id')
  findProductCategoryById(@Param('id')id:number):Observable<ProductPostCategoryInterface>{
    return this.ProductCategoryService.getProductCategoryById(id)
  }
  @Patch(':id')
  updateProductCategoryData(@Param('id')id:number,@Body() category:ProductPostCategoryInterface):Observable<UpdateResult>{
    return this.ProductCategoryService.updateProductCategory(id,category)
  }
  @Delete(':id')
  deleteProductCategory(@Param('id')id:number):Observable<DeleteResult>{
    return this.ProductCategoryService.deleteProductCategory(id)
  }
}