import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { BookEntity } from './models/book.entity';
import { BookEntity } from './models/book.entity'

@Module({
  imports:[
    TypeOrmModule.forFeature([BookEntity])
  ],
  providers: [BookService],
  controllers: [BookController]
})
export class BookModule {}