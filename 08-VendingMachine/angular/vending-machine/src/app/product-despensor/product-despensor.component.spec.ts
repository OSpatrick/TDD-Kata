import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDespensorComponent } from './product-despensor.component';

describe('ProductDespensorComponent', () => {
  let component: ProductDespensorComponent;
  let fixture: ComponentFixture<ProductDespensorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDespensorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDespensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
