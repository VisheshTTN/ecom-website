import { Component, DoCheck,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CartService } from '../cart/cart.service';
import { Product } from '../products/products.interface';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {

  itemsInCart: Product[];
  loggedIn = false;
  showDrawer = false;
  showPopup = false;

  constructor(
    private cartService: CartService, 
    private usersService: UsersService,
    private router: Router,
    private cookie: CookieService) { }

  ngOnInit(): void {
    this.itemsInCart = this.cartService.getProductsFromCart();
    this.loggedIn = this.usersService.isAuthenticated();
    console.log(this.itemsInCart);
  }

  ngDoCheck() {
    this.loggedIn = this.usersService.isAuthenticated();
  }

  onGoToCart() {
    this.loggedIn = this.usersService.isAuthenticated();
    if(!this.loggedIn) {
      this.showPopup = true;
    }

    else {
      this.router.navigate(['/your-cart']);
    }
  }

  closePopup() {
    this.showPopup = false;
  }

  openDrawer() {
    this.showDrawer = true;
  }

  onLogout() {
    this.usersService.logout();
    this.cookie.delete('name');
    alert('Successfully logged out')
    this.router.navigate(['/login']);
  }
}
