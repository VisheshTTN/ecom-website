import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {

  @Input() show: boolean;
  @Output() closeDrawer = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onCloseDrawer() {
    this.closeDrawer.emit();
  }

}
