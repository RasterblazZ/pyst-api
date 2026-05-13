import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Currency {
  @PrimaryGeneratedColumn()
  id_currency!: number;

  @Column()
  abbreviation!: string;

  @Column()
  name!: string;
}