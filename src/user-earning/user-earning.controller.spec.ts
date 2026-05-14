import { Test, TestingModule } from '@nestjs/testing';
import { UserEarningController } from './user-earning.controller';

describe('UserEarningController', () => {
  let controller: UserEarningController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserEarningController],
    }).compile();

    controller = module.get<UserEarningController>(UserEarningController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
