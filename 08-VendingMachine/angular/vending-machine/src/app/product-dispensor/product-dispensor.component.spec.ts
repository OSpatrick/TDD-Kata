import { ComponentFixture, TestBed } from '@angular/core/testing';

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

  it('should dispense', () => {
    expect(component.dispenseProduct(COLA)).toBeTruthy();
  });
});
