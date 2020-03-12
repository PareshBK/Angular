import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent implements OnInit {

  public products = [];
  constructor(private _productService: ProductService){}

  isCollapsed: boolean = true;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit(){
    this._productService.getProducts()
        .subscribe(data => this.products = data);
    }

  }

