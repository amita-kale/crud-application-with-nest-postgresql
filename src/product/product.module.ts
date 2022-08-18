import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './controllers/product.controller';
import { ProductPostEntity } from './models/product.entity';
// import { ProductPostEntity } from './models/product.interface';
import { ProductService } from './services/product.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([ProductPostEntity])
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
