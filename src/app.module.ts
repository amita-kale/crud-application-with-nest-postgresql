// @Module({ imports: [StudentModule, ConfigModule.forRoot({ isGlobal: true }), TypeOrmModule.forRoot({ type: 'postgres', host: process.env.DB_HOST, port: parseInt(<string > process.env.DB_PORT), username: process.env.DB_USERNAME, password: process.env.DB_PASSWORD, database: process.env.DB_DATABASE, autoLoadEntities: true, synchronize: true, }), FeedModule, ProductModule, UsersModule, ], controllers: [AppController], providers: [AppService], }) export class AppModule {}

// FlightMModule, BookModule,

import {
    Module
}
from '@nestjs/common';
import {
    ConfigModule
}
from '@nestjs/config';
<<<<<<< HEAD
import {
    TypeOrmModule
}
from '@nestjs/typeorm';
import {
    AppController
}
from './app.controller';
import {
    AppService
}
from './app.service';
import { BookModule } from './book/book.module';
// import {
//     BookModule
// }
// from './book/book.module';
import {
    FeedModule
}
from './Employee-management/services/employee.module';
// import {
//     FlightMModule
// }
// from './flight-m/flight-m.module';
import {
    ProductModule
}
from './product/product.module';
import {
    StudentModule
}
from './student/student.module';
import {
    UsersModule
}
from './usermodule/users.module';

@Module({ imports: [StudentModule, BookModule, ConfigModule.forRoot({ isGlobal: true }), TypeOrmModule.forRoot({ type: 'postgres', host: process.env.DB_HOST, port: parseInt(<string > process.env.DB_PORT), username: process.env.DB_USERNAME, password: process.env.DB_PASSWORD, database: process.env.DB_DATABASE, autoLoadEntities: true, synchronize: true, }), FeedModule, ProductModule, UsersModule, ], controllers: [AppController], providers: [AppService], }) export class AppModule {}
// FlightMModule, BookModule,
=======

import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';


import { FeedModule } from './Employee-management/services/employee.module';

import { FlightMModule } from './flight-m/flight-m.module';
import { ProductModule } from './product/product.module';
import { StudentModule } from './student/student.module';

import { UsersModule } from './usermodule/users.module';

@Module({
  imports: [
    StudentModule,
    FlightMModule,
    BookModule,

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
    FeedModule,
    ProductModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

>>>>>>> ea0b879c0fa00249becd420f2451d2ce31471bf3
