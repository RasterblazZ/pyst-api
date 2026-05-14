import { Controller, Get, Put, Body } from '@nestjs/common';
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
    create(@Body() subscriptionTypeData: any) {
        if (!subscriptionTypeData.name) {
            return {
                error: 'Missing required fields: name'
            }
        }
        // use the SubscriptionTypeService to create a new subscription type in the database
        return this.subscriptionTypeService.create({
            name: subscriptionTypeData.name
        });
    }
}
