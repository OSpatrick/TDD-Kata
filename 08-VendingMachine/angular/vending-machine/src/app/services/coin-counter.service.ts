import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoinCounterService {

  constructor() { }

  count(coin: any): any {
    return coin;
  }
}
