import { Controller, Get , Put } from '@nestjs/common';
import { CurrencyService } from './currency.service';


@Controller('currency')
export class CurrencyController {
     constructor(private readonly currencyService: CurrencyService) {}

    @Get()
    findAll() {
        // use the CurrencyService to fetch all currencies from the database
        return this.currencyService.findAll();
    }

    @Put()
    create() {
        // use the CurrencyService to create a new currency in the database
        return this.currencyService.create({
            name: 'US Dollar',
            abbreviation: 'USD'
        });
    }
}
