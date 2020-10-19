import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      'search': new FormControl(null, Validators.required)
    })
  }

  onSubmit() {
    this.router.navigate(['/search-results', this.searchForm.value.search])
  }

}
