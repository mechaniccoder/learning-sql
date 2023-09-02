import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Set {
  @PrimaryGeneratedColumn()
  id: number;
}
