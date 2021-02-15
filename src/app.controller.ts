import { Controller, Get, UseFilters } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './common/filters/HttpExceptionFilter';

@UseFilters(HttpExceptionFilter)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('bla')
  getBlaBlaFoo(): string {
    return 'bla bla foo';
  }

  @Get('exception')
  throwExceptionMotherfucker() {
    throw new Error(`Hello i'm an error`);
  }
}
