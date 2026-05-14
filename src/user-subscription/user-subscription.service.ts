import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserSubscription } from './user-subscription.entity';

@Injectable()
export class UserSubscriptionService {
  constructor(
    @InjectRepository(UserSubscription)
    
    private repo: Repository<UserSubscription>,
  ) {}

  findAll() {
    return this.repo.find();
  }

  create(data: Partial<UserSubscription>) {
    const userSubscription = this.repo.create(data);
    return this.repo.save(userSubscription);
  }
}