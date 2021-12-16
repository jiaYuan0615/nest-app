import { Controller, Get, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hey')
  getHey(@Request() request: Request): string {
    console.log(request);
    return this.appService.getHey();
  }
}
