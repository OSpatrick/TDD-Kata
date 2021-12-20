import { Injectable } from '@angular/core';
import { Coin, dime, nickel } from 'src/model/coin.interface';

@Injectable({
  providedIn: 'root'
})
export class CoinCounterService {

  constructor() { }

  count(diameter: number, weight: number): number {
    if (diameter == nickel.diameter && 
        weight == nickel.weight)
        return nickel.value;
    else if (diameter == dime.diameter && 
      weight == dime.weight)
      return dime.value;
  }
}
