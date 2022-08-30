/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
// eslint-disable-next-line prettier/prettier
import { AppController } from './app.controller';
// eslint-disable-next-line prettier/prettier
import { AppService } from './app.service';
// eslint-disable-next-line prettier/prettier
import { BookModule } from './book/book.module';

// eslint-disable-next-line prettier/prettier
import { EmpModule } from './Employee-management/services/employee.module';
// eslint-disable-next-line prettier/prettier


import { FlightMModule } from './flight-m/flight-m.module';
// eslint-disable-next-line prettier/prettier
import { ProductModule } from './product/product.module';
// eslint-disable-next-line prettier/prettier
import { StudentModule } from './student/student.module';

// eslint-disable-next-line prettier/prettier

import { MulterModule } from '@nestjs/platform-express';
import { CategoryModule } from './book/category/category.module';

@Module({
  imports: [
    StudentModule,
    FlightMModule,
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
      autoLoadEntities: true,
      synchronize: true,
    }),

    // eslint-disable-next-line prettier/prettier
    MulterModule.register({ dest:'./images' }),
    EmpModule,
    ProductModule,
    EmpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
