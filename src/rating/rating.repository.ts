import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Rating } from './rating.entity';

@Injectable()
export class RatingRepository {
  constructor(@InjectEntityManager() private entityManager: EntityManager) {}

  async findOne(ratingId: number): Promise<Rating> {
    const sql = `
        SELECT *
        FROM ratings
        WHERE rating_id = ${ratingId}
    `;

    const rating = await this.entityManager.query(sql);

    if (!rating) {
      throw new Error(`Rating not found`);
    }

    return rating;
  }

  async findWithBusiness(businessId: number): Promise<Rating[]> {
    const sql = `
        SELECT rating_id, stars, comment, 
            DATE_FORMAT(created, '%y년 %m월 %d일 %p %h시 %i분 %s초') AS created_fmt
        FROM ratings 
        WHERE fk_business_id = ${businessId}
    `;

    const ratings = await this.entityManager.query(sql);

    return ratings;
  }
}
