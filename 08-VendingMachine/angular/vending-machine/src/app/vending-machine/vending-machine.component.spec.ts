import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NICKEL } from 'src/model/coin.interface';
import { COLA } from 'src/model/product.interface';
import { AppModule } from '../app.module';
import { ProductSelectorComponent } from '../product-selector/product-selector.component';
import { CoinCounterService } from '../services/coin-counter.service';

import { VendingMachineComponent } from './vending-machine.component';

describe('VendingMachineComponent', () => {
  let component: VendingMachineComponent;
  let fixture: ComponentFixture<VendingMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendingMachineComponent, ProductSelectorComponent ],
      imports: [AppModule],
      providers: [
        CoinCounterService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendingMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have coinslot method', () => {
    expect(component.coinSlot).toBeDefined();
  });

  it('should communicate with coinCounter service', () => {
    const counterServiceSpy = spyOn(component.coinCounterService, 'count');

    component.coinSlot(NICKEL);
    expect(counterServiceSpy).toHaveBeenCalled();
  });

  it('should display INSERT COIN when no coins inserted', () => {
    const counterValue: DebugElement = fixture.debugElement.query((By.css('#counter')));
    expect(counterValue.nativeElement.textContent).toBe('INSERT COIN');
  });

  it('should display Nickel button', () => {
    const counterValue: DebugElement = fixture.debugElement.query((By.css('#Nickel')));
    expect(counterValue.nativeElement).toBeDefined();
  });

  it('should display Dime button', () => {
    const counterValue: DebugElement = fixture.debugElement.query((By.css('#Dime')));
    expect(counterValue.nativeElement).toBeDefined();
  });

  it('should display Quarter button', () => {
    const counterValue: DebugElement = fixture.debugElement.query((By.css('#Quarter')));
    expect(counterValue.nativeElement).toBeDefined();
  });

  it('should display Penny button', () => {
    const counterValue: DebugElement = fixture.debugElement.query((By.css('#slug')));
    expect(counterValue.nativeElement).toBeDefined();
  });

  it('should add nickel when nickel button pressed', fakeAsync(() => {
    let button = fixture.debugElement.query((By.css('#Nickel'))).nativeElement;
    button.click();
    fixture.detectChanges();
    const counterValue: DebugElement = fixture.debugElement.query((By.css('#counter')));
    expect(counterValue.nativeElement.innerText).toBe('5');
  }));

  it('should add nickel when nickel button pressed', fakeAsync(() => {
    let nickelButton = fixture.debugElement.query((By.css('#Nickel'))).nativeElement;
    let dimeButton = fixture.debugElement.query((By.css('#Dime'))).nativeElement;
    dimeButton.click();
    nickelButton.click();
    fixture.detectChanges();
    const counterValue: DebugElement = fixture.debugElement.query((By.css('#counter')));
    expect(counterValue.nativeElement.innerText).toBe('15');
  }));

  it('should not add to counter when slug pressed', fakeAsync(() => {
    let button = fixture.debugElement.query((By.css('#slug'))).nativeElement;
    button.click();
    fixture.detectChanges();
    const counterValue: DebugElement = fixture.debugElement.query((By.css('#counter')));
    expect(counterValue.nativeElement.innerText).toBe('INSERT COIN');
  }));

  it('should display the product selector', () => {
    const counterValue: DebugElement = fixture.debugElement.query((By.css('#product-selections')));
    expect(counterValue.nativeElement).toBeDefined();
  });

  it('should display the product dispenser', () => {
    const counterValue: DebugElement = fixture.debugElement.query((By.css('#product-dispenser')));
    expect(counterValue.nativeElement).toBeDefined();
  });

  it('should input to dispensor', () => {
    fixture.debugElement.query((By.css('#Cola'))).nativeElement.click();
    fixture.detectChanges();
    expect(component.selectedProduct).toEqual(COLA);
  });

});
