import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RatingController } from './rating.controller';
import { Rating } from './rating.entity';
import { RatingRepository } from './rating.repository';
import { RatingService } from './rating.service';

@Module({
  imports: [TypeOrmModule.forFeature([Rating])],
  controllers: [RatingController],
  providers: [RatingService, RatingRepository],
})
export class RatingModule {}
