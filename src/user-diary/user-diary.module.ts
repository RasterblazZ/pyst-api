import { Module } from '@nestjs/common';
import { UserDiaryController } from './user-diary.controller';
import { UserDiaryService } from './user-diary.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDiary } from './user-diary.entity';

@Module({
  controllers: [UserDiaryController],
  providers: [UserDiaryService],
  imports: [TypeOrmModule.forFeature([UserDiary])]
})
export class UserDiaryModule {}
