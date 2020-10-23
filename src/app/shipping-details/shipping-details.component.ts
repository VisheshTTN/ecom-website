import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.css']
})
export class ShippingDetailsComponent implements OnInit {

  shippingForm: FormGroup;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.shippingForm = new FormGroup({
      'firstname': new FormControl(null, Validators.required),
      'lastname': new FormControl(null, Validators.required),
      'addressLine1': new FormControl(null, Validators.required),
      'addressLine2': new FormControl(null),
      'country': new FormControl(null, Validators.required),
      'city': new FormControl(null, Validators.required),
      'zip': new FormControl(null, [Validators.required, Validators.min(100000), Validators.max(999999)]),
      'phone': new FormControl(null, [Validators.required, Validators.min(1000000000), Validators.max(9999999999)])
    });

  //   get zip() {
  //     return this.shippingForm.get('zip');
  // } 
  }

  onCompleteOrder() {
    // this.cartService.clearCart();
    // this.router.navigate(['/order-complete']);
    console.log(this.shippingForm);
  }

}
