import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'sections',
})
export class Section {
  @PrimaryGeneratedColumn()
  section_id: number;

  @Column({
    length: 5,
  })
  section_name: string;

  @Column({
    type: 'tinyint',
  })
  floor: number;
}
