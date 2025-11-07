import {Component, signal, EventEmitter, Output, output} from '@angular/core';
import { PrimaryBtn } from '../common/primary-btn/primary-btn';

@Component({
  selector: 'app-header',
  imports: [PrimaryBtn],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  onClick = output<string>();
  buttonText = signal('Contact us!');

  links = signal([
    {
      label: 'Home',
      href: '#hero'
    },
    {
      label: 'Gallery',
      href: '#gallery'
    },
    {
      label: 'Pricing',
      href: '#pricing'
    },
    {
      label: 'Contact',
      href: '#contact'
    }
  ]);

  scroll(el: string) {
    this.onClick.emit(el);
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
