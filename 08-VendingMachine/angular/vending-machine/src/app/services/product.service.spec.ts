import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); 
  });

  it('should get products', () => {
    expect(service.products()).toEqual(['Cola', 'Chips', 'Candy']);
  });

});
