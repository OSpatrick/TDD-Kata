import { TestBed } from '@angular/core/testing';

import { CoinCounterService } from './coin-counter.service';

describe('CoinCounterService', () => {
  let service: CoinCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoinCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return value of coin', () => {
    expect(service.count(25)).toEqual(25);
  });
});
