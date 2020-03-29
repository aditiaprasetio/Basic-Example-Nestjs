import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

export function moduleFactory(): any {
  const dbConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.TYPEORM_HOST,
    password: process.env.TYPEORM_PASSWORD,
    username: process.env.TYPEORM_USERNAME,
    database: process.env.TYPEORM_DATABASE,
    port: Number(process.env.TYPEORM_PORT),
    entities: ['src/*entity.ts', 'src/**/*.entity.ts', 'src/**/**/*.entity.ts'],
    logging: Boolean(process.env.TYPEORM_LOGGING),
    synchronize: false,
    migrationsRun: true,
    migrations: [process.env.TYPEORM_MIGRATIONS],
  };

  @Module({
    imports: [TypeOrmModule.forRoot(dbConfig)],
  })
  class MainModule {}

  return MainModule;
}
