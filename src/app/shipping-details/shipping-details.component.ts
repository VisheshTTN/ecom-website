import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.css']
})
export class ShippingDetailsComponent implements OnInit {

  shippingForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.shippingForm = new FormGroup({
      'firstname': new FormControl(null, Validators.required),
      'lastname': new FormControl(null, Validators.required),
      'addressLine1': new FormControl(null, Validators.required),
      'addressLine2': new FormControl(null),
      'country': new FormControl(null, Validators.required),
      'city': new FormControl(null, Validators.required),
      'zip': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'phone': new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)])
    })
  }

  onCompleteOrder() {
    console.log('here');
    this.router.navigate(['/order-complete']);
  }

}
