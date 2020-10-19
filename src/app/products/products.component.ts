import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [];

  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  addToCart(id: number) {
    this.cartService.addProductToCart(id);
  }

}
