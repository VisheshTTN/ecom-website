import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Product } from '../products/products.interface';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  itemsInCart: Product[];
  loggedIn = false;
  showDrawer = false;

  constructor(private cartService: CartService, private usersService: UsersService) { }

  ngOnInit(): void {
    this.itemsInCart = this.cartService.getProductsFromCart();
    this.loggedIn = this.usersService.isAuthenticated();
    console.log(this.loggedIn);
  }

  openDrawer() {
    this.showDrawer = true;
  }

  closeDrawer() {
    this.showDrawer = false;
    console.log(this.showDrawer);
  }
}
