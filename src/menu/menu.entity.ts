import { Business } from 'src/business/business.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  menu_id: number;

  @Column({
    length: 20,
  })
  menu_name: string;

  @Column({
    type: 'decimal',
    precision: 5,
    scale: 2,
  })
  kilocalories: number;

  @Column()
  price: number;

  @Column()
  likes: number;

  @ManyToOne(() => Business)
  fk_business_id: number;
}
