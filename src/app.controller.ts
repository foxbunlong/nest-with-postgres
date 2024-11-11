import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('App')
@Controller()
export class AppController {
  constructor() {}

  @ApiOperation({ summary: 'Default load - Just to hide out' })
  @Post('')
  postDefault() {
    return 'Welcome to App';
  }

  @ApiOperation({ summary: 'Default load - Just to hide out' })
  @Get('')
  getDefault() {
    return 'Welcome to App';
  }
}
