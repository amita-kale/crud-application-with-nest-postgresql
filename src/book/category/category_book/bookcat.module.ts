import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
// import { BookCatController } from './bookcat.controller';
import { BookCatEntity } from './bookcat.entity';
// import { BookCatService } from './bookcat.service';




@Module({
  imports:[
    TypeOrmModule.forFeature([BookCatEntity])
  ],
//   providers: [BookCatService],
//   controllers: [BookCatController]
})
export class BookCatModule {}