import { Component, OnInit } from '@angular/core';
import { CoinCounterService } from '../services/coin-counter.service';

@Component({
  selector: 'app-vending-machine',
  templateUrl: './vending-machine.component.html',
  styleUrls: ['./vending-machine.component.scss']
})
export class VendingMachineComponent implements OnInit {
  
  constructor(public coinCounterService: CoinCounterService) { }

  ngOnInit(): void {
  }

  coinSlot(): boolean {
    
    this.coinCounterService.count(1);
    return false;
  }
}
