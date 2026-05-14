import { Controller, Get, Put, Body } from '@nestjs/common';
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
    create(@Body() subscriptionData: any) {
        if (!subscriptionData.id_subscription_type || !subscriptionData.name || !subscriptionData.suggested_currency || !subscriptionData.suggested_amount) {
            return {
                error: 'Missing required fields: id_subscription_type, name, suggested_currency, and suggested_amount'
            }
        }
        // use the SubscriptionService to create a new subscription in the database
        return this.subscriptionService.create({
            id_subscription_type: subscriptionData.id_subscription_type,
            name: subscriptionData.name,
            suggested_currency: subscriptionData.suggested_currency,
            suggested_amount: subscriptionData.suggested_amount
        });
    }
}
