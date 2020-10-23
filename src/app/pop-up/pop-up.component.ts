import { ChangeDetectionStrategy, Component, EventEmitter, Input,  OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class PopUpComponent implements OnInit {

  @Input() show: boolean;
  @Output() closePopup = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.show);
  }

  onClosePopup() {
    this.closePopup.emit();
  }

  onLogin() {
    this.router.navigate(['/login'])
  }

}
