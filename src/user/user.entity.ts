import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id_user!: number;

  @Column()
  name!: string;

  @Column()
  last_names!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  country!: string;

  @Column()
  language!: string;

  @Column()
  favorite_currency!: string;
}