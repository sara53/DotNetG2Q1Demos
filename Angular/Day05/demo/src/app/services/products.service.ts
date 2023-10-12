import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { productsList } from '../models/productsList';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  getAllProducts(): Iproduct[] {
    return productsList;
  }

  getProductById(productId: number): Iproduct | undefined {
    return productsList.find((product) => product.id == productId);
  }

  addNewProduct(product: any) {
    productsList.push(product);
  }
}
