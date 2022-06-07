import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';
describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => { // beforeEach -> 테스트를 하기 전에 실행
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();
    service = module.get<MoviesService>(MoviesService);
  });
  
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be 4', () => {
    expect(2 + 3).toEqual(5);
  });
});