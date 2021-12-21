import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products(): any {
    return ['Cola', 'Chips', 'Candy'];
  }
}
