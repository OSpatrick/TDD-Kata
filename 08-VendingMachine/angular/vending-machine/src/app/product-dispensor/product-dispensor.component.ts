import { Component, Input, OnInit, Output } from '@angular/core';
import {Product} from '../../model/product.interface';

@Component({
  selector: 'app-product-dispensor',
  templateUrl: './product-dispensor.component.html',
  styleUrls: ['./product-dispensor.component.scss']
})

export class ProductDispensorComponent implements OnInit {
  
  @Input() public dispensedProduct: Product;

  constructor() {
    this.dispensedProduct = null;
  }

  ngOnInit(): void {
  }

  // dispenseProduct(product: Product): void {
  //   this.dispensedProduct = product;
  // }
}
