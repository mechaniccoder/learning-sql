import { Section } from 'src/section/section.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

enum BusinessStatus {
  OPN = 'OPN',
  CLS = 'CLS',
}

@Entity({
  name: 'businesses',
})
export class Business {
  @PrimaryGeneratedColumn()
  business_id: number;

  @Column({
    length: '10',
  })
  business_name: string;

  @Column({
    type: 'enum',
    enum: BusinessStatus,
    default: BusinessStatus.OPN,
  })
  status: BusinessStatus;

  @Column({
    type: 'boolean',
  })
  can_takeout: boolean;

  @ManyToOne(() => Section)
  @JoinColumn({
    name: 'fk_section_id',
  })
  fk_section_id: Section;
}
