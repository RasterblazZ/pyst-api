import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { Currency } from '../currency/currency.entity';

@Entity()
export class UserSubscription {
  @PrimaryGeneratedColumn()
  id_user_subscription!: number;

  @Column()
  id_user!: number;

  @Column()
  id_subscription!: number;

  @Column()
  id_currency!: number;

  @Column()
  frecuency!: string;

  @Column()
  day_number!: number;

  @Column()
  amount!: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'id_user' })
  user: User;

  @ManyToOne(() => Currency)
  @JoinColumn({ name: 'id_currency' })
  currency: Currency;
}