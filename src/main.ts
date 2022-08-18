
import { ValidationPipe } from '@nestjs/common';
import {
    NestFactory
}
from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {
    AppModule
}
from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe({
        disableErrorMessages:true,
        whitelist:true,
        forbidNonWhitelisted:true
    }))
    const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe());
    //app.setGlobalPrefix('api');
    await app.listen(3000);

// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.setGlobalPrefix('emp');
//   await app.listen(3000);
// >>>>>>> 5251b3b56fae08c03c888fdb9c17afbc464a3112
}
bootstrap();