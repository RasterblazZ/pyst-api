import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDiary } from './user-diary.entity';

@Injectable()
export class UserDiaryService {
  constructor(
    @InjectRepository(UserDiary)
    private repo: Repository<UserDiary>,
  ) {}

  findAll() {
    return this.repo.find();
  }

  create(data: Partial<UserDiary>) {
    const userDiary = this.repo.create(data);
    return this.repo.save(userDiary);
  }
}