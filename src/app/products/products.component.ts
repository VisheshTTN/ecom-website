import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { UsersService } from '../users.service';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [];
  loggedIn: boolean;
  showPopup = false;

  constructor(
    private productsService: ProductsService, 
    private cartService: CartService, 
    private usersService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    console.log(this.products);
  }

  addToCart(id: number) {
    this.loggedIn = this.usersService.isAuthenticated();

    this.cartService.addProductToCart(id);

    if(!this.loggedIn) {
      this.showPopup = true;
    }
    
  }

  onGoToCart() {

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

}
