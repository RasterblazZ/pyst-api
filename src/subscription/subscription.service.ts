import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Subscription } from './subscription.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubscriptionService {
    constructor(
        @InjectRepository(Subscription)
        private repo: Repository<Subscription>,
    ) { }

    findAll() {
        return this.repo.find();
    }

    create(data: Partial<Subscription>) {
        const subscription = this.repo.create(data);
        return this.repo.save(subscription);
    }
}
