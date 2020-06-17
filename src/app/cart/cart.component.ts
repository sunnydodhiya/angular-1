import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  vall: Number;
  cartt: Product[] = [];
  total: Number;
  constructor(
    public activatedRoute: ActivatedRoute,
    public productService: ProductService,
    public route: Router
  ) {
    this.vall = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.cartt = this.productService.getItems();
  }
  toDelete(id: Number, price: Number) {
    this.productService.toDel(id);
  }
}
