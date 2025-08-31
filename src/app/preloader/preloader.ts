import { Component } from '@angular/core';
import {ProgressBar} from 'primeng/progressbar';

@Component({
  selector: 'app-preloader',
  imports: [
    ProgressBar
  ],
  templateUrl: './preloader.html',
  styleUrl: './preloader.scss'
})
export class Preloader {

}
