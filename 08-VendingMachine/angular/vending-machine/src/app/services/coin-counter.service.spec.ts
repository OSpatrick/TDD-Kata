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

  it('should identify a nickel', () => {
    expect(service.count(21.21, 5)).toEqual(5);
  });

  it('should identify a dime', () => {
    expect(service.count(19.91, 2.268)).toEqual(10);
  });

  it('should identify a quarter', () => {
    expect(service.count(24.26, 5.67)).toEqual(25);
  });

  it('should return 0 when invalid coin', () => {
    expect(service.count(12, 2)).toEqual(0);
  })
});
