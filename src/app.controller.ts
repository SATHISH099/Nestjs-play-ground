import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { resolve } from 'path';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('home')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('blocking')
  getBlocking(): string {
    const time = new Date().getTime();
    while (new Date().getTime() < time + 10000) {}
    return 'blocking';
  }

  @Get('non-blocking')
  async getNonBlocking(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('non-blocking');
      }, 10000);
    });
  }
}
