import { Component, output, signal, inject, computed } from '@angular/core';
import { PrimaryBtn } from '../common/primary-btn/primary-btn';
import { DrawerModule } from 'primeng/drawer';
import { BreakpointService } from '../services/breakpoint.service';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-header',
  imports: [PrimaryBtn, DrawerModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  #breakPoint = inject(BreakpointService);

  onClick = output<string>();
  buttonText = signal('Contact us!');
  isDesktop = computed(() => {
    return this.#breakPoint.isDesktop()?.matches;
  });

  visible: boolean = false;

  links = signal([
    {
      label: 'Home',
      href: '#hero',
    },
    {
      label: 'Gallery',
      href: '#gallery',
    },
    {
      label: 'Pricing',
      href: '#pricing',
    },
    {
      label: 'Contact',
      href: '#contact',
    },
  ]);

  scroll(el: string) {
    this.toggleNavBar();
    this.onClick.emit(el);
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleNavBar() {
    this.visible = !this.visible;
  }
}
