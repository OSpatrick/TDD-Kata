import { Component, OnInit } from '@angular/core';
import { CoinCounterService } from '../services/coin-counter.service';
import { Coin, VALID_COINS } from 'src/model/coin.interface';

@Component({
  selector: 'app-vending-machine',
  templateUrl: './vending-machine.component.html',
  styleUrls: ['./vending-machine.component.scss']
})
export class VendingMachineComponent implements OnInit {
  public coins: Coin[] = VALID_COINS;
  public counter: number = 0;
  
  constructor(public coinCounterService: CoinCounterService) { }

  ngOnInit(): void {
  }

  //TODO: wire up coinSlot to counter
  coinSlot(coin): void {
    this.counter += this.coinCounterService.count(coin.diameter, coin.weight);
  }
}
