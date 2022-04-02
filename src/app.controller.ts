import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './services/app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/:id')
  getHey(@Req() request: Request): string {
    return this.appService.getHey();
  }
}
