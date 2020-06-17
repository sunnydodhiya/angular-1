import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService, public route: Router) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
  addIt(id, shortDescription, price) {
    alert(shortDescription + ' ' + 'added to cart');
    this.productService.addtoCart(id);

    this.route.navigate(['products']);
  }
}
