import {
    ValidationPipe
}
from '@nestjs/common';
import {
    NestFactory
}
from '@nestjs/core';
import {
    AppModule
}
from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new ValidationPipe({ disableErrorMessages:false, whitelist:true, forbidNonWhitelisted:true }));
    await app.listen(3000);
    // =======
    // import { NestFactory } from '@nestjs/core';
    // import { AppModule } from './app.module';

    // async function bootstrap() {
    // const app = await NestFactory.create(AppModule);
    // app.setGlobalPrefix('emp');
    // await app.listen(3000);
    // >>>>>>> 5251b3b56fae08c03c888fdb9c17afbc464a3112
}
bootstrap();
