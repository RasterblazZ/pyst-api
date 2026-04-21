import { Controller, Get , Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    findAll() {
        // use the UserService to fetch all users from the database
        return this.userService.findAll();
    }

    @Put()
    create() {
        // use the UserService to create a new user in the database
        return this.userService.create({
            name: 'John',
            last_names: 'Doe',
            email: 'john.doe@example.com',
            country: 'USA',
            language: 'English',
            favorite_currency: 'USD'
        });
    }
}
