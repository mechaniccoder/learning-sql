import { Section } from 'src/section/section.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

enum BusinessStatus {
  OPN = 'OPN',
  CLS = 'CLS',
}

@Entity()
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
  fk_section_id: Section;
}
