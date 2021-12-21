import { Injectable } from '@angular/core';
import { Product, PRODUCTS } from 'src/model/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products(): any {
    return PRODUCTS;
  }

  dispense(product: Product, availableCoins: number): boolean {
    if(availableCoins < product.price)
    {
      return false;
    }
    return true;
  }
}
