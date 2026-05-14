import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { Currency } from '../currency/currency.entity';

@Entity()
export class UserDiary {
  @PrimaryGeneratedColumn()
  id_user_diary!: number;

  @Column()
  id_user!: number;

  @Column()
  id_currency!: number;

  @Column()
  type!: number;

  @Column()
  date!: Date;

  @Column()
  name!: string;

  @Column()
  amount!: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'id_user' })
  user: User;

  @ManyToOne(() => Currency)
  @JoinColumn({ name: 'id_currency' })
  currency: Currency;
}