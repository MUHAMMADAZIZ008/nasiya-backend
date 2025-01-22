import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from '../config/index';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: config.DB_HOST,
      port: +config.DB_PORT,
      username: config.DB_USER,
      password: config.DB_PASS,
      database: config.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
      entities: ['dist/core/entity/*.entity{.ts,.js}'],
    }),
  ],
})
export class AppModule {}
