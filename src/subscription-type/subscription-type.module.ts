import { Module } from '@nestjs/common';
import { SubscriptionTypeController } from './subscription-type.controller';
import { SubscriptionTypeService } from './subscription-type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubscriptionTypeEntity } from './subscription-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SubscriptionTypeEntity])],
  controllers: [SubscriptionTypeController],
  providers: [SubscriptionTypeService]
})
export class SubscriptionTypeModule {}
