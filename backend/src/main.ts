import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationError, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Abilita CORS per Angular
  app.enableCors({
    origin: 'http://localhost:4200',
    credentials: true,
  });

  // Abilita validazione globale dei DTO
  app.useGlobalPipes(new ValidationPipe({ 
    whitelist: true,
  }));

  await app.listen(3000);
}
bootstrap();

