import {Component, input} from '@angular/core';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-primary-btn',
  imports: [
    Button
  ],
  templateUrl: './primary-btn.html',
  styleUrl: './primary-btn.scss'
})
export class PrimaryBtn {
  label = input.required<string>();
}
