import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Currency } from './currency.entity';

@Injectable()
export class CurrencyService {
    constructor(
        @InjectRepository(Currency)
        private repo: Repository<Currency>,
      ) {}
    
      findAll() {
        return this.repo.find();
      }
    
      create(data: Partial<Currency>) {
        const currency = this.repo.create(data);
        return this.repo.save(currency);
      }
}
