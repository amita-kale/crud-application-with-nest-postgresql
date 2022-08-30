/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategoryController } from './controllers/product-category.controller';
import { ProductController } from './controllers/product.controller';
import { ProductPostCategory } from './models/product-category.entity';
import { ProductPostEntity } from './models/product.entity';
import { ProductCategoryService } from './services/product-category.service';
// import { ProductPostEntity } from './models/product.interface';
import { ProductService } from './services/product.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductPostEntity,ProductPostCategory])],
  controllers: [ProductController,ProductCategoryController],
  providers: [ProductService,ProductCategoryService],
})
export class ProductModule {}
