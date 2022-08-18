import { ValidationPipe } from '@nestjs/common';
<<<<<<< HEAD
import {
    NestFactory
}
from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {
    AppModule
}
from './app.module';
=======
>>>>>>> ea0b879c0fa00249becd420f2451d2ce31471bf3

async function bootstrap() {
<<<<<<< HEAD
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
=======
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()

>>>>>>> ea0b879c0fa00249becd420f2451d2ce31471bf3
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
<<<<<<< HEAD
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe());
    //app.setGlobalPrefix('api');
    await app.listen(3000);
=======

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe());
  //app.setGlobalPrefix('api');
  await app.listen(3000);
>>>>>>> ea0b879c0fa00249becd420f2451d2ce31471bf3
}
bootstrap();
