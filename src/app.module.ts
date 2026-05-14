import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { CurrencyModule } from './currency/currency.module';
import { SubscriptionTypeModule } from './subscription-type/subscription-type.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { UserSubscriptionModule } from './user-subscription/user-subscription.module';
import { UserDiaryModule } from './user-diary/user-diary.module';
import { UserEarningModule } from './user-earning/user-earning.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: false,
    }),
    UserModule,
    CurrencyModule,
    SubscriptionTypeModule,
    SubscriptionModule,
    UserSubscriptionModule,
    UserDiaryModule,
    UserEarningModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
