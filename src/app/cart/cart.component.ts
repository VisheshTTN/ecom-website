import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart = [];
  cartValue = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getProductsFromCart();

    this.cart.map(item=>{
      this.cartValue = this.cartValue + item.price;
    })
    console.log(this.cart);
  }

  

}