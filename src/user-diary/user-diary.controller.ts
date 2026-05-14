import { Controller, Get, Put } from '@nestjs/common';
import { UserDiaryService } from './user-diary.service';

@Controller('user-diary')
export class UserDiaryController {
    constructor(private readonly userDiaryService: UserDiaryService) { }

    @Get()
    findAll() {
        return this.userDiaryService.findAll();
    }

    @Put()
    create() {
        return this.userDiaryService.create({
            id_user: 1,
            id_currency: 1,
            type: 1,
            date: new Date(),
            name: 'Diary Entry 1',
            amount: 100,
        });
    }
}
