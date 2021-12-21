import { Component, OnInit } from '@angular/core';

import { Injectable } from '@angular/core';
import { ProductService } from '../services/product.service';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-product-selector',
  templateUrl: './product-selector.component.html',
  styleUrls: ['./product-selector.component.scss']
})


export class ProductSelectorComponent implements OnInit {

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
  }

  getProducts(): string[] {
    return this.productService.products();
  }
}
