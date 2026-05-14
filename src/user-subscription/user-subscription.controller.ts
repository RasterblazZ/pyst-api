import { Controller, Get, Put } from '@nestjs/common';
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
    create() {
        // use the UserSubscriptionService to create a new user subscription in the database
        return this.userSubscriptionService.create({
                id_user: 1,
                id_subscription: 1,
                id_currency: 1,
                frecuency: 'monthly',
                day_number: 1,
                amount: 4,
        });
    }
}
