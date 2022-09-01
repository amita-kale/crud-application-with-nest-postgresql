import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { BookEntity } from './models/book.entity';
import { BookEntity } from './models/book.entity';
import { BookCatEntity } from './category/category_book/bookcat.entity';
import { BookCatModule } from './category/category_book/bookcat.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([BookEntity,BookCatEntity])
  ],
  providers: [BookService],
  controllers: [BookController]
})
export class BookModule {}