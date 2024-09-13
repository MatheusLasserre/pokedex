import { NestFactory } from '@nestjs/core';
import { PokedexApiModule } from './pokedex-api.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(PokedexApiModule, {
    cors: true,
    logger: ['error', 'warn', 'log', 'debug'],
  });
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
  }));
  await app.listen(3000);
}

bootstrap();
