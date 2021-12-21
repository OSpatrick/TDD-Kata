import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product.interface';

@Component({
  selector: 'app-product-dispensor',
  templateUrl: './product-dispensor.component.html',
  styleUrls: ['./product-dispensor.component.scss']
})

export class ProductDispensorComponent implements OnInit {
  public dispensedProduct: Product;

  constructor() {
    this.dispensedProduct = null;
  }

  ngOnInit(): void {
  }

  // TODO: clean this crap
  dispenseProduct(product: Product): void {
    this.dispensedProduct = product;
  }
}
