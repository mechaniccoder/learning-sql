import { Injectable } from '@nestjs/common';
import { Rating } from './rating.entity';
import { RatingRepository } from './rating.repository';

@Injectable()
export class RatingService {
  constructor(private ratingRepository: RatingRepository) {}

  async findOne(ratingId: number): Promise<Rating> {
    const rating = await this.ratingRepository.findOne(ratingId);

    return rating;
  }

  async findWithBusiness(businessId: number): Promise<Rating[]> {
    const ratings = await this.ratingRepository.findWithBusiness(businessId);

    return ratings;
  }
}
