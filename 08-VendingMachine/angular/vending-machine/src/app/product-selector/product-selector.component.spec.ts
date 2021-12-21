import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { ProductSelectorComponent } from './product-selector.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('ProductSelectorComponent', () => {
  let component: ProductSelectorComponent;
  let fixture: ComponentFixture<ProductSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display cola button', () => {
    const counterValue: DebugElement = fixture.debugElement.query((By.css('#Cola')));
    expect(counterValue.nativeElement).toBeDefined();
  });

  it('should display chips button', () => {
    const counterValue: DebugElement = fixture.debugElement.query((By.css('#Chips')));
    expect(counterValue.nativeElement).toBeDefined();
  });

  it('should display candy button', () => {
    const counterValue: DebugElement = fixture.debugElement.query((By.css('#Candy')));
    expect(counterValue.nativeElement).toBeDefined();
  });

  it('should get products from product service', () => {
    expect(component.getProducts().length).toBe(3);
  });

  it('should emit event on selection', fakeAsync(() => {
    let spy: any = spyOn(component.selectedProductEmitter, 'emit');
    fixture.debugElement.query((By.css('#Cola'))).nativeElement.click();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  }));
});
