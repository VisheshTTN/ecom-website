import { Component, OnInit } from '@angular/core';
import { Product } from '../products/products.interface';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Product[];
  cartValue = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts.subscribe(
      (product: Product[]) => {
        console.log(product);
        this.cart = product;
      }
    );

    this.cartValue = this.cartService.cartValue;
    this.cartService.getCartValue.subscribe(
      (price: number) => {
        this.cartValue = price;
      }
    )
  }

  calculateCartValue() {
    this.cart.map(item=>{
      this.cartValue = this.cartValue*item.quantity + item.price;
    })
  }

  onIncreaseQuantity(productId: number) {
    this.cartService.addProductToCart(productId);
    this.cartValue = this.cartService.cartValue;
  }

  onDecreaseQuantity(productId: number) {

    this.cartService.decreaseProductQuantity(productId);
    this.cartValue = this.cartService.cartValue;
  }

  removeProduct(productId: number) {
    this.cartService.removeProductFromCart(productId);
    this.cartValue = this.cartService.cartValue;
  }

}
