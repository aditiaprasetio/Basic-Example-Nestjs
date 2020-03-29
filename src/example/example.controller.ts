import { Controller } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { ExampleService } from './example.service';

@ApiUseTags('Example')
@Controller('examples')
export class ExampleController {
  constructor(public service: ExampleService) {}
}
