import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Example } from './example.entity';

@Injectable()
export class ExampleService {
  constructor(@InjectRepository(Example) repo: Repository<Example>) {}

  async;
}
