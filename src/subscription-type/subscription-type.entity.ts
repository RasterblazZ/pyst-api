import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Subscription } from '../subscription/subscription.entity';

@Entity()
export class SubscriptionTypeEntity {
  @PrimaryGeneratedColumn()
  id_subscription_type!: number;

  @Column()
  name!: string;

  @OneToMany(() => Subscription, (subscription) => subscription.id_subscription_type)
  subscriptions: Subscription[];
}