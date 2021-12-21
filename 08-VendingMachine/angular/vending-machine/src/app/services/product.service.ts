import { Injectable } from '@angular/core';
import { product, PRODUCTS } from 'src/model/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products(): any {
    return PRODUCTS;
  }

  dispense(product: product, availableCoins: number): boolean {
    if(availableCoins < product.price)
    {
      return false;
    }
    return true;
  }
}
