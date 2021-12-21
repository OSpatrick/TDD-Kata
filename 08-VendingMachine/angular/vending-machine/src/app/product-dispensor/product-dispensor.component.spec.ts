import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import { ProductDispensorComponent } from './product-dispensor.component';
import {COLA} from '../../model/product.interface';

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
    expect(component.dispensedProduct.name).toBe('Cola');
  }));
});
