import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSelectorComponent } from './product-selector.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('ProductSelectorComponent', () => {
  let component: ProductSelectorComponent;
  let fixture: ComponentFixture<ProductSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*
There are three products:
   cola for $1.00,
   chips for $0.50,
   and candy for $0.65.

   When the respective button is pressed and enough money has been inserted,
   the product is dispensed and the machine displays THANK YOU.

   If the display is checked again, it will display INSERT COIN and the current amount will be set to $0.00.
   If there is not enough money inserted then the machine displays PRICE and the price of the item
       and subsequent checks of the display will display either INSERT COIN or the current amount as appropriate.
   */
  it('should display cola button', () => {
    const counterValue: DebugElement = fixture.debugElement.query((By.css('#cola')));
    expect(counterValue.nativeElement).toBeDefined();
  });

  it('should display chips button', () => {
    const counterValue: DebugElement = fixture.debugElement.query((By.css('#chips')));
    expect(counterValue.nativeElement).toBeDefined();
  });

  it('should display candy button', () => {
    const counterValue: DebugElement = fixture.debugElement.query((By.css('#candy')));
    expect(counterValue.nativeElement).toBeDefined();
  });

});
