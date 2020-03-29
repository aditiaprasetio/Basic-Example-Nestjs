import { Body, Controller, Post } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { Example } from './example.entity';
import { ExampleService } from './example.service';

@ApiUseTags('Example')
@Controller('examples')
export class ExampleController {
  constructor(public service: ExampleService) {}

  @Post()
  createOne(@Body() dto: Example): any {
    return this.service.createOne(dto);
  }
}
