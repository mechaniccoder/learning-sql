import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rating } from './rating.entity';

@Injectable()
export class RatingService {
  constructor(
    @InjectRepository(Rating) private ratingRepository: Repository<Rating>,
  ) {}
  async findOne(ratingId: number) {
    const rating = await this.ratingRepository.findOne({
      where: {
        rating_id: ratingId,
      },
    });
    return rating;
  }
}
