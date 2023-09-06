import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { RatingService } from './rating.service';

@Controller('ratings')
export class RatingController {
  constructor(private ratingService: RatingService) {}

  @Get(':ratingId')
  getRating(@Param('ratingId', ParseIntPipe) ratingId: number) {
    return this.ratingService.findOne(ratingId);
  }

  @Get('/businesses/:businessId')
  async getRatingsOfBusiness(
    @Param('businessId', ParseIntPipe) businessId: number,
  ) {
    const ratings = await this.ratingService.findWithBusiness(businessId);

    return ratings;
  }
}
