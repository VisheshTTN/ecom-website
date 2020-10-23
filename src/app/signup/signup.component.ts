import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  message = '';
  showToaster = false;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    this.usersService.addUser(this.signupForm.value)
      .then(res=> {
        this.signupForm.reset();
        this.showToaster = true;
        setTimeout(() => {
          this.showToaster = false;
        }, 2000);
      })
      .catch(err=>{
        this.message = err.message;
      })
  }

}
