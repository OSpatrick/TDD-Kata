import { ComponentFixture, TestBed } from '@angular/core/testing';
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
});
