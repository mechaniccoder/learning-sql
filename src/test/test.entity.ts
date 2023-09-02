import { Section } from 'src/section/section.entity';
import { Set } from 'src/set/set.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Test {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Section)
  @JoinColumn({
    name: 'sectionId',
  })
  section: Section;

  @ManyToOne(() => Set)
  set: Set;
}
