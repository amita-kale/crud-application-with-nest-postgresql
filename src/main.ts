
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useGlobalPipes(
    // new ValidationPipe({
    //   disableErrorMessages: true,
    //   whitelist: true,
    //   forbidNonWhitelisted: true,
    // }),
  );

  const config = new DocumentBuilder()
    .setTitle('Book Management')
    .setDescription('Add show Edit Delete -> Book data')
    .setVersion('1.0')
    .addTag('Group B Assignment')

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3002);

}
bootstrap();
