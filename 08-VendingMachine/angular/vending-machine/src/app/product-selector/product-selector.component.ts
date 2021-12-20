import { Component, OnInit } from '@angular/core';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-product-selector',
  templateUrl: './product-selector.component.html',
  styleUrls: ['./product-selector.component.scss']
})


export class ProductSelectorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
