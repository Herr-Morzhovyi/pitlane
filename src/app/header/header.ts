import { Component, signal, EventEmitter, Output } from '@angular/core';
import { PrimaryBtn } from '../common/primary-btn/primary-btn';

@Component({
  selector: 'app-header',
  imports: [PrimaryBtn],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  @Output() onClick = new EventEmitter<string>();
  buttonText = signal('Contact us!');

  scroll(el: string) {
    this.onClick.emit(el);
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
