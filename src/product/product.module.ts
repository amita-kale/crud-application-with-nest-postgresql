/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { categoriesController } from './controllers/categories.controller';
import { ProductCategoryController } from './controllers/product-category.controller';
import { ProductController } from './controllers/product.controller';
import { categories } from './models/categories.entity.ts';
import { ProductPostCategory } from './models/product-category.entity';
import { ProductPostEntity } from './models/product.entity';
import { categories_service } from './services/categories.service';
import { ProductCategoryService } from './services/product-category.service';
// import { ProductPostEntity } from './models/product.interface';
import { ProductService } from './services/product.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductPostEntity,ProductPostCategory,categories])],
  controllers: [ProductController,ProductCategoryController,categoriesController],
  providers: [ProductService,ProductCategoryService,categories_service],
})
export class ProductModule {}
