import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  itemsInCart: any;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.itemsInCart = this.cartService.getProductsFromCart();
  }

}
