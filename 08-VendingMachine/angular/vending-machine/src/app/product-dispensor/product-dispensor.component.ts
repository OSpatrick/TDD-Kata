import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product.interface';

@Component({
  selector: 'app-product-dispensor',
  templateUrl: './product-dispensor.component.html',
  styleUrls: ['./product-dispensor.component.scss']
})
export class ProductDispensorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dispenseProduct(product: Product) {
    return true;
  }
}
