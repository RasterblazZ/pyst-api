import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubscriptionTypeEntity } from './subscription-type.entity';

@Injectable()
export class SubscriptionTypeService {
    constructor(
        @InjectRepository(SubscriptionTypeEntity)
        private repo: Repository<SubscriptionTypeEntity>,
    ) { }

    findAll() {
        return this.repo.find();
    }

    create(data: Partial<SubscriptionTypeEntity>) {
        const subscriptionType = this.repo.create(data);
        return this.repo.save(subscriptionType);
    }
}
