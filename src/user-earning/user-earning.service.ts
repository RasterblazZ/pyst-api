import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEarning } from './user-earning.entity';

@Injectable()
export class UserEarningService {
  constructor(
    @InjectRepository(UserEarning)
    
    private repo: Repository<UserEarning>,
  ) {}

  findAll() {
    return this.repo.find();
  }

  create(data: Partial<UserEarning>) {
    const userEarning = this.repo.create(data);
    return this.repo.save(userEarning);
  }
}