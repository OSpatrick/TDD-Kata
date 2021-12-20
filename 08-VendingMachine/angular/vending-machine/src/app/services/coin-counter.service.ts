import { Injectable } from '@angular/core';
import { VALID_COINS } from 'src/model/coin.interface';

@Injectable({
  providedIn: 'root'
})
export class CoinCounterService {

  constructor() { }

  count(diameter: number, weight: number): number {
    return this.determineValue(diameter, weight);
  }

  determineValue(diameter: number, weight: number): number {
    let value: number = 0
    VALID_COINS.forEach(coin => {
      if (coin.diameter == diameter &&
        coin.weight == weight)
        value = coin.value
    });
    return value;
  }
}
