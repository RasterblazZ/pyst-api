import { Controller, Get , Put, Body } from '@nestjs/common';
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
    create(@Body() userData: any) {
        if (!userData.name || !userData.last_names || !userData.email || !userData.country || !userData.language || !userData.favorite_currency || !userData.password) {
            return {
                error: 'Missing required fields: name, last_names, email, country, language, favorite_currency, and password'
            }
        }
        // use the UserService to create a new user in the database
        return this.userService.create({
            name: userData.name,
            last_names: userData.last_names,
            email: userData.email,
            country: userData.country,
            language: userData.language,
            favorite_currency: userData.favorite_currency,
            password: userData.password,
        });
    }
}
