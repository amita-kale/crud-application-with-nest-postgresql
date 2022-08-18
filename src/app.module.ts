import {
    Module
}
from '@nestjs/common';
import {
    ConfigModule, ConfigService
}
from '@nestjs/config';
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

import {
    FeedModule
}
from './Employee-management/services/employee.module';

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

@Module({ imports: [StudentModule, ConfigModule.forRoot({ isGlobal: true }), TypeOrmModule.forRoot({ type: 'postgres', host: process.env.DB_HOST, port: parseInt(<string > process.env.DB_PORT), username: process.env.DB_USERNAME, password: process.env.DB_PASSWORD, database: process.env.DB_DATABASE, autoLoadEntities: true, synchronize: true, }), FeedModule, ProductModule, UsersModule, ], controllers: [AppController], providers: [AppService], }) export class AppModule {}

// FlightMModule, BookModule,
