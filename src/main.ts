import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      //disableErrorMessages:false,
      //whitelist:true,
      //forbidNonWhitelisted:true
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Swagger')
    .setDescription('Add show Edit Delete ->  data')
    .setVersion('1.0')
    .addTag('Group B Assignment')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors();
  await app.listen(3001);
}
bootstrap();
