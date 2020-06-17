import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css'],
})
export class ProductInfoComponent implements OnInit {
  product: Product;
  target: Product;
  id: Number;
  constructor(
    public productService: ProductService,
    public activatedRoute: ActivatedRoute,
    public route: Router
  ) {
    this.id = activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.target = this.productService.getProduct(this.id);
  }
  gotoHome() {
    this.route.navigate(['products']);
  }
  addIt(id, shortDescription, price) {
    alert(shortDescription + ' ' + 'added to cart');
    this.productService.addtoCart(id);
    this.route.navigate(['products']);
  }
}
