import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Set } from './set.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Set])],
})
export class SetModule {}
