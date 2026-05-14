import { Controller, Get, Put, Body } from '@nestjs/common';
import { UserSubscriptionService } from './user-subscription.service';

@Controller('user-subscription')
export class UserSubscriptionController {
    constructor(private readonly userSubscriptionService: UserSubscriptionService) { }

    @Get()
    findAll() {
        // use the UserSubscriptionService to fetch all user subscriptions from the database
        return this.userSubscriptionService.findAll();
    }

    @Put()
    create(@Body() userSubscriptionData: any) {
        if (!userSubscriptionData.id_user || !userSubscriptionData.id_subscription || !userSubscriptionData.id_currency || !userSubscriptionData.frecuency || !userSubscriptionData.day_number || !userSubscriptionData.amount) {
            return {
                error: 'Missing required fields'
            };
        }
        // use the UserSubscriptionService to create a new user subscription in the database
        return this.userSubscriptionService.create({
                id_user: userSubscriptionData.id_user,
                id_subscription: userSubscriptionData.id_subscription,
                id_currency: userSubscriptionData.id_currency,
                frecuency: userSubscriptionData.frecuency,
                day_number: userSubscriptionData.day_number,
                amount: userSubscriptionData.amount,
        });
    }
}
