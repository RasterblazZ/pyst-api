import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SubscriptionTypeEntity {
  @PrimaryGeneratedColumn()
  id_subscription_type!: number;

  @Column()
  name!: string;
}