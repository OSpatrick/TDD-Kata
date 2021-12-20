import { TestBed } from '@angular/core/testing';
import { nickel } from 'src/model/coin.interface';

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

  // xit('should return value of coin', () => {
  //   expect(service.count(nickel)).toEqual(25);
  // });

  it('should identify a nickel', () => {
    expect(service.count(21.21, 5)).toEqual(5);
  });

  it('should identify a dime', () => {
    expect(service.count(19.91, 2.268)).toEqual(10);

  });
});
