import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  productId: any;
  constructor(
    public productServices: ProductsService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
  }
  productName: string = '';
  price: any = '';
  quantity: any = '';

  formOperation(e: any) {
    e.preventDefault();
    let newProduct = {
      productName: this.productName,
      price: this.price,
      quantity: this.quantity,
    };
    this.productServices.addNewProduct(newProduct);
    this.router.navigate(['/products']);
    //
  }
}
