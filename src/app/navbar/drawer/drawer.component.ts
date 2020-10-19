import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {

  @Input() closeDrawer: any;

  constructor() { }

  ngOnInit(): void {
  }

  onCloseDrawer() {
    this.closeDrawer();
  } // this doesn't work.....

}
