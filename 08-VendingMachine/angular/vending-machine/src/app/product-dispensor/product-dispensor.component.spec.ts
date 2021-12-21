import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { ProductDispensorComponent } from './product-dispensor.component';
import {COLA} from '../../model/product.interface';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('ProductDispensorComponent', () => {
  let component: ProductDispensorComponent;
  let fixture: ComponentFixture<ProductDispensorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDispensorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDispensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('defaults the dispensed product to null', () => {
    expect(component.dispensedProduct).toBeNull();
  });

  it('should dispense product', fakeAsync(() => {
    component.dispenseProduct(COLA);
    tick();
    expect(component.dispensedProduct.name).toBe('Cola');
    const dispenseElement: DebugElement = fixture.debugElement.query((By.css('#product-dispenser')));
    expect(dispenseElement.nativeElement.innerText).toBe('5');
  }));
});
