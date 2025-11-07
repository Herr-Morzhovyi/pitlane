import {Component, input} from '@angular/core';

@Component({
  selector: 'app-primary-btn',
  templateUrl: './primary-btn.html',
  styleUrl: './primary-btn.scss'
})
export class PrimaryBtn {
  label = input.required<string>();
}
