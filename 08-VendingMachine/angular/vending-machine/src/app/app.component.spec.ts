import { DebugElement } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { VendingMachineComponent } from './vending-machine/vending-machine.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        VendingMachineComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'vending-machine'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('vending-machine');
  });

  it('vending machine should exist', ()=> {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app.vendingMachine).toBeDefined();
  });

  it('should display vending machine data', ()=> {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    
    const vendingMachineMessage: DebugElement = fixture.debugElement.query((By.css('#vendingMachine')));

    expect(vendingMachineMessage.nativeElement.textContent).toEqual('vending-machine works!');
  });
});
