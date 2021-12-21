import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendingMachineComponent } from './vending-machine/vending-machine.component';
import { ProductSelectorComponent } from './product-selector/product-selector.component';
import { CoinCounterService } from './services/coin-counter.service';
import { ProductService } from './services/product.service';
import { ProductDispensorComponent } from './product-dispensor/product-dispensor.component';

@NgModule({
  declarations: [
    AppComponent,
    VendingMachineComponent,
    ProductSelectorComponent,
    ProductDispensorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CoinCounterService, ProductService],
  bootstrap: [AppComponent, ProductSelectorComponent, VendingMachineComponent]
})
export class AppModule { }
