import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Business } from './business.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Business])],
})
export class BusinessModule {}
