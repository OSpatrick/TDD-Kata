import { Component } from '@angular/core';
import { VendingMachineComponent } from './vending-machine/vending-machine.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vending-machine';
  vendingMachine: any = VendingMachineComponent;

}
