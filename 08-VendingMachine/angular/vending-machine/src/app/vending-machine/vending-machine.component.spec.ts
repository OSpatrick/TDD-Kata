import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CoinCounterService } from '../services/coin-counter.service';

import { VendingMachineComponent } from './vending-machine.component';

describe('VendingMachineComponent', () => {
  let component: VendingMachineComponent;
  let fixture: ComponentFixture<VendingMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendingMachineComponent ],
      providers: [
        CoinCounterService
      ]
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

  it('should return false if invalid coin', () => {
    expect(component.coinSlot()).toBeFalse();
  });

  it('should communicate with coinCounter service', () => {
    let counterServiceSpy = spyOn(component.coinCounterService, 'count');
    
    component.coinSlot();
    expect(counterServiceSpy).toHaveBeenCalled();
  });

  it('should display coin count', () => {
    const counterValue: DebugElement = fixture.debugElement.query((By.css('#counter')));
    expect(counterValue.nativeElement.textContent).toBe('0');
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
});
