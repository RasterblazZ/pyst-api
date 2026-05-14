import { Controller, Get, Put, Body } from '@nestjs/common';
import { UserEarningService } from './user-earning.service';

@Controller('user-earning')
export class UserEarningController {
    constructor(private readonly userEarningService: UserEarningService) { }

    @Get()
    findAll() {
        return this.userEarningService.findAll();
    }

    @Put()
    create(@Body() userEarningData: any) {
        if (!userEarningData.id_user || !userEarningData.id_currency || !userEarningData.name || !userEarningData.frecuency || !userEarningData.day_number || !userEarningData.amount) {
            return {
                error: 'Missing required fields'
            };
        }
        return this.userEarningService.create({
            id_user: userEarningData.id_user,
            id_currency: userEarningData.id_currency,
            name: userEarningData.name,
            frecuency: userEarningData.frecuency,
            day_number: userEarningData.day_number,
            amount: userEarningData.amount,
        });
    }
}
