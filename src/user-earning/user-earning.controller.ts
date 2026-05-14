import { Controller, Get, Put } from '@nestjs/common';
import { UserEarningService } from './user-earning.service';

@Controller('user-earning')
export class UserEarningController {
    constructor(private readonly userEarningService: UserEarningService) { }

    @Get()
    findAll() {
        return this.userEarningService.findAll();
    }

    @Put()
    create() {
        return this.userEarningService.create({
            id_user: 1,
            id_currency: 1,
            name: 'Earning 1',
            frecuency: 'monthly',
            day_number: 1,
            amount: 100,
        });
    }
}
