import { Controller, Get, Put } from '@nestjs/common';
import { SubscriptionTypeService } from './subscription-type.service';

@Controller('subscription-type')
export class SubscriptionTypeController {
    constructor(private subscriptionTypeService: SubscriptionTypeService) { }

    @Get()
    findAll() {
        // use the SubscriptionTypeService to fetch all subscription types from the database
        return this.subscriptionTypeService.findAll();
    }

    @Put()
    create() {
        // use the SubscriptionTypeService to create a new subscription type in the database
        return this.subscriptionTypeService.create({
            name: 'Plataformas',
        });
    }
}
