import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null)
    });
  }

  onSubmit() {
    this.usersService.checkUserDetails(this.loginForm.value.email, this.loginForm.value.password);
    this.loggedIn = this.usersService.isAuthenticated();
    if(this.loggedIn) {
      this.router.navigate(['/']);
    }
    else {
      this.message = 'Invalid credentials!';
    }
  }

}
