import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Injectable } from '@angular/core';
import { Product } from 'src/model/product.interface';
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

  @Output() selectedProductEmitter = new EventEmitter<Product>();

  ngOnInit(): void {
  }

  selectProduct(selectedProduct: Product): void {
    this.selectedProductEmitter.emit(selectedProduct);
  }

  getProducts(): string[] {
    return this.productService.products();
  }
}
