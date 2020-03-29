import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Example } from './example.entity';

@Injectable()
export class ExampleService {
  constructor(
    @InjectRepository(Example) private readonly repo: Repository<Example>,
  ) {}

  async createOne(dto: any): Promise<any> {
    const created = await this.repo.create(dto);
    return this.repo.save(created);
  }
}
