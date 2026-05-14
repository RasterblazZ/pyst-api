import { Controller, Get , Put, Body} from '@nestjs/common';
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
    create(@Body() currencyData: any) {
        if (!currencyData.name || !currencyData.abbreviation) {
            return {
                error: 'Missing required fields: name and abbreviation'
            }
        }
        // use the CurrencyService to create a new currency in the database
        return this.currencyService.create({
            name: currencyData.name,
            abbreviation: currencyData.abbreviation
        });
    }
}
