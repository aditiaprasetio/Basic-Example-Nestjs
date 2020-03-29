import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExampleController } from './example.controller';
import { Example } from './example.entity';
import { ExampleService } from './example.service';

@Module({
  imports: [TypeOrmModule.forFeature([Example])],

  providers: [ExampleService],

  controllers: [ExampleController],
})
export class ExampleModule {}
