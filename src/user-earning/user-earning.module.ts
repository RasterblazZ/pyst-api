import { Module } from '@nestjs/common';
import { UserEarningController } from './user-earning.controller';
import { UserEarningService } from './user-earning.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEarning } from './user-earning.entity';


@Module({
  controllers: [UserEarningController],
  providers: [UserEarningService],
  imports: [TypeOrmModule.forFeature([UserEarning])]
})
export class UserEarningModule {}
