import { Component } from '@angular/core';
import { Divider } from 'primeng/divider';

@Component({
  selector: 'app-footer',
  imports: [Divider],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  standalone: true,
})
export class Footer {}
