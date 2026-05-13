import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { SubscriptionTypeEntity } from '../subscription-type/subscription-type.entity';

@Entity()
export class Subscription {
  @PrimaryGeneratedColumn()
  id_subscription!: number;

  @Column()
  id_subscription_type!: number;

  @Column()
  name!: string;

  @Column()
  suggested_currency!: string;

  @Column()
  suggested_amount!: string;

  @ManyToOne(() => SubscriptionTypeEntity, (subscriptionType) => subscriptionType.subscriptions)
  @JoinColumn({ name: 'subscription_type_id' })
  subscriptionType: SubscriptionTypeEntity;
}