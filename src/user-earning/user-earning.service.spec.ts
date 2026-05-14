import { Test, TestingModule } from '@nestjs/testing';
import { UserEarningService } from './user-earning.service';

describe('UserEarningService', () => {
  let service: UserEarningService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserEarningService],
    }).compile();

    service = module.get<UserEarningService>(UserEarningService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
