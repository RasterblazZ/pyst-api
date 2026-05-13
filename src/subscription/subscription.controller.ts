import { Controller, Get, Put } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';

@Controller('subscription')
export class SubscriptionController {
    constructor(private readonly subscriptionService: SubscriptionService) { }

    @Get()
    findAll() {
        // use the SubscriptionService to fetch all subscriptions from the database
        return this.subscriptionService.findAll();
    }

    @Put()
    create() {
        // use the SubscriptionService to create a new subscription in the database
        return this.subscriptionService.create({
            id_subscription_type: 1,
            name: 'John',
            suggested_currency: 'USD',
            suggested_amount: '100.00'
        });
    }
}
