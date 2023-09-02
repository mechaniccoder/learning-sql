import { Business } from 'src/business/business.entity';
import { Column, ManyToOne } from 'typeorm';

export class Rating {
  rating_id: number;

  stars: number;

  comment: string;

  @Column({
    type: 'timestamp',
  })
  created: Date;

  @ManyToOne(() => Business)
  fk_business_id: number;
}
