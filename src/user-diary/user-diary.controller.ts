import { Controller, Get, Put, Body } from '@nestjs/common';
import { UserDiaryService } from './user-diary.service';

@Controller('user-diary')
export class UserDiaryController {
    constructor(private readonly userDiaryService: UserDiaryService) { }

    @Get()
    findAll() {
        return this.userDiaryService.findAll();
    }

    @Put()
    create(@Body() userDiaryData: any) {
        if (!userDiaryData.id_user || !userDiaryData.id_currency || !userDiaryData.type || !userDiaryData.date || !userDiaryData.name || !userDiaryData.amount) {
            throw new Error('Missing required fields');
        }
        return this.userDiaryService.create({
            id_user: userDiaryData.id_user,
            id_currency: userDiaryData.id_currency,
            type: userDiaryData.type,
            date: userDiaryData.date,
            name: userDiaryData.name,
            amount: userDiaryData.amount,
        });
    }
}
