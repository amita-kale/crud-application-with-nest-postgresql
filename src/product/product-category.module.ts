import { Controller, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { UsersModule } from 'src/usermodule/users.module';
import { ProductCategoryController } from './controllers/product-category.controller';
import { ProductPostCategory } from './models/product-category.entity';
import { ProductCategoryService } from './services/product-category.service';
@Module({
  imports: [TypeOrmModule.forFeature([ProductPostCategory])],
  controllers: [ProductCategoryController],
  providers: [ProductCategoryService],
})
export class ProductCategoryModule {}
