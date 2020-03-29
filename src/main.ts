import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import dotenv = require('dotenv');
// import { AllExceptionsFilter } from './all-exceptions.filter';
import { moduleFactory } from './app.module';
import { SwaggerBuilder } from './swagger.option';

// Load dot environment before load other modules
const { parsed } = dotenv.config({
  path: process.cwd() + '/.env',
});
process.env = { ...parsed, ...process.env };

async function bootstrap(): Promise<void> {
  const nestApp = await NestFactory.create(moduleFactory());

  // nestApp.useGlobalFilters(new AllExceptionsFilter());

  const document = SwaggerBuilder(nestApp, 'LOCAL');

  SwaggerModule.setup('/swagger', nestApp, document);

  nestApp.enableCors();

  await nestApp.listen(parsed.APP_PORT);

  console.info(`Server started at http://localhost:${parsed.APP_PORT}`);
}

bootstrap();
