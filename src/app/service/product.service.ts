import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  product1: Product;
  product2: Product;
  product3: Product;

  products = [];
  cartItem = [];

  constructor() {
    this.product1 = new Product(
      1,
      'shoes',
      'blackberry 123',
      'export quality',
      2000
    );
    this.product2 = new Product(2, 'shirt', 'zara', 'silk shirt', 4000);
    this.product3 = new Product(
      3,
      'jeans',
      'jack and jones',
      'boot pants',
      2500
    );
    this.products.push(this.product1);
    this.products.push(this.product2);
    this.products.push(this.product3);
  }
  getProducts(): Product[] {
    return this.products;
  }
  getProduct(id): Product {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        return this.products[i];
      }
    }
  }
  addtoCart(id) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        if (this.cartItem) this.cartItem.push(this.products[i]);
      }
    }
  }
  getItems() {
    return this.cartItem;
  }
  toDel(id) {
    for (let i = 0; i < this.cartItem.length; i++) {
      let c = this.cartItem[i];
      if (c.id == id) {
        this.cartItem.splice(i, 1);
      }
    }
  }

  //   getTotal(): Number {
  //     for (let i = 0; i < this.cartItem.length; i++) {
  //       this.total = this.total + this.cartItem[i].price;
  //     }
  //     return this.total;
  //   }
}
