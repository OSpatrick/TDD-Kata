import { TestBed } from '@angular/core/testing';
import { CANDY, CHIPS, COLA, PRODUCTS } from 'src/model/product.interface';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should get products', () => {
    expect(service.products()).toEqual(PRODUCTS);
  });

  it('should dispense selected product', () => { 
    expect(service.dispense(COLA, 100)).toBe(true);
  });

  it('should not dispense product if not enough coins', () => {
    expect(service.dispense(COLA, 99)).toBe(false);
  });

  it('should dispense selected product', () => { 
    expect(service.dispense(CHIPS, 50)).toBe(true);
  });

  it('should not dispense product if not enough coins', () => {
    expect(service.dispense(CHIPS, 49)).toBe(false);
  });

  it('should dispense selected product', () => { 
    expect(service.dispense(CANDY, 65)).toBe(true);
  });
 
  it('should not dispense product if not enough coins', () => {
    expect(service.dispense(CANDY, 64)).toBe(false);
  });
});
