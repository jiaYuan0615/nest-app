import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import nocache from 'nocache';
import _ from 'lodash';
import morgan from 'morgan';
import compression from 'compression';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { route } from './config/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    logger: ['error', 'warn'],
  });

  app.use(helmet());
  app.use(cookieParser());
  app.use(nocache());
  app.use(compression());

  const status = _.lowerCase(process.env.APP_ENV) === 'development' ? 'dev' : 'tiny';
  app.use(morgan(status))

  const swagger = new DocumentBuilder()
    .setTitle(process.env.APP_PLATFORM)
    .setDescription(process.env.APP_PLATFORM_DESCRIPTION)
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swagger);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.APP_PORT);

  console.log(`Server is active on: ${route}`);
  console.log(`Swagger Documentation Path: ${route}/docs`);


}
bootstrap();
