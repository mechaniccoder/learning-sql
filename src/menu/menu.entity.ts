import { Business } from 'src/business/business.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'menus',
})
export class Menu {
  @PrimaryGeneratedColumn()
  menu_id: number;

  @Column({
    length: 20,
  })
  menu_name: string;

  @Column({
    type: 'decimal',
    precision: 7,
    scale: 2,
  })
  kilocalories: number;

  @Column()
  price: number;

  @Column()
  likes: number;

  @ManyToOne(() => Business)
  @JoinColumn({
    name: 'fk_business_id',
  })
  fk_business_id: number;
}
