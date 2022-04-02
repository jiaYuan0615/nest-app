import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import cookieParser from 'cookie-parser'
import nocache from 'nocache'
import compression from 'compression';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    logger: ['error', 'warn'],
  });
  app.use(helmet());
  app.use(cookieParser())
  app.use(nocache())
  app.use(compression());

  const config = new DocumentBuilder()
    .setTitle('後端 API')
    .setDescription('後端 API 文件')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  await app.listen(3000);
  console.log(`app is listen on 3000`);
}
bootstrap();
