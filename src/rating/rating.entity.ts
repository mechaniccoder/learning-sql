import { Business } from 'src/business/business.entity';
import { Section } from 'src/section/section.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'ratings',
})
export class Rating {
  @PrimaryGeneratedColumn()
  rating_id: number;

  @Column({
    type: 'tinyint',
  })
  stars: number;

  @Column({
    type: 'varchar',
    length: '200',
  })
  comment: string;

  @Column({
    type: 'timestamp',
  })
  created: Date;

  @Column({ name: 'fk_business_id' })
  businessId: number;

  @ManyToOne(() => Business)
  @JoinColumn({
    name: 'fk_business_id',
  })
  business: Business;

  @ManyToOne(() => Section)
  section: Section;
}
