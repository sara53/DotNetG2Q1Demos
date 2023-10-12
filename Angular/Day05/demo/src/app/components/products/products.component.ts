import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Iproduct[] = [];
  constructor(public productServices: ProductsService) {}
  ngOnInit(): void {
    this.products = this.productServices.getAllProducts();
    console.log(this.products);
  }
}
