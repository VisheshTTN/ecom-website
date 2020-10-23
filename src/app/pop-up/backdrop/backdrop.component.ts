import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class BackdropComponent implements OnInit {

  @Input() show: boolean;
  @Output() closePopup = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.show);
  }

  onCloseBackdrop () {
    this.closePopup.emit();
  }



}
