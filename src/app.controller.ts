import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './services/app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
