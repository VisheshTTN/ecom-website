import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { stringify } from 'querystring';
import { CartService } from '../cart/cart.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loggedIn = false;
  message = '';

  constructor(
    private usersService: UsersService,
    private cartService: CartService, 
    private router: Router,
    private cookie: CookieService) { }
    

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    this.usersService.login(this.loginForm.value.email, this.loginForm.value.password)
      .then((response: {name: string, email: string, password: string})=> {
        this.cookie.set('userName', response.name);
        if(this.cartService.getProductsFromCart().length){
          this.router.navigate(['/your-cart'])
        }
        else{
          this.router.navigate(['/']);
        }
      })
      .catch(err=> {
        this.message = 'Invalid credentials!';
      });
  }

}
