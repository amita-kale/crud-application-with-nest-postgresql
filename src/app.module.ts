import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
// eslint-disable-next-line prettier/prettier
import { AppController } from './app.controller';
// eslint-disable-next-line prettier/prettier
import { AppService } from './app.service';
// eslint-disable-next-line prettier/prettier
import { BookModule } from './book/book.module';

import { PassengerMModule } from './flight-m/passenger-m.module';

// eslint-disable-next-line prettier/prettier
import { EmpModule } from './Employee-management/services/employee.module';
// eslint-disable-next-line prettier/prettier

// eslint-disable-next-line prettier/prettier

import { ProductModule } from './product/product.module';
// eslint-disable-next-line prettier/prettier
import { StudentModule } from './student/student.module';
import { MulterModule } from '@nestjs/platform-express';

import { SubjectModule } from './subject/subject.module';

import { CategoryModule } from './book/category/category.module';
import { StudsubrefModule } from './studsubref/studsubref.module';
import { UsersModule } from './usermodule/users.module';

import { BookCategoryEntity } from './book/category/category.entity';
import { BookCatEntity } from './book/category/category_book/bookcat.entity';
import { BookEntitys } from './book/models/book.entity';
// import { BookCategoryEntity } from './book/category/category.entity';
// import { BookCatEntity } from './book/category/category_book/bookcat.entity';

import { StudentPostEntity } from './student/models/post.entity';
import { StudSubjectEntity } from './student/models/subject.entity';
import { StudSubjectRefEntity } from './student/models/student-subref.entity';


@Module({
  imports: [
    StudentModule,
    PassengerMModule,
    BookModule,
    CategoryModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(<string>process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: false,

      synchronize: false,
      entities: [BookCategoryEntity,BookCatEntity,BookEntitys,StudentPostEntity,StudSubjectEntity,StudSubjectRefEntity]

    }),

    // eslint-disable-next-line prettier/prettier
    MulterModule.register({ dest: './images' }),
    EmpModule,
    ProductModule,
    UsersModule,
    SubjectModule,
    StudsubrefModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
