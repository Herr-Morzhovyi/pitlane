import {Component, computed, inject, output, signal} from '@angular/core';
import {PrimaryBtn} from '../common/primary-btn/primary-btn';
import {DrawerModule} from 'primeng/drawer';
import {BreakpointService} from '../services/breakpoint.service';
import {Select} from 'primeng/select';
import {FormsModule} from '@angular/forms';
import {WordpressService} from '../services/wordpress.service';

@Component({
  selector: 'app-header',
  imports: [PrimaryBtn, DrawerModule, Select, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  #breakPoint = inject(BreakpointService);
  #wp = inject(WordpressService);

  currentLang = computed(() => this.#wp.currentLanguage());
  languages = [
    { name: 'English', code: 'en' },
    { name: 'Latviešu', code: 'lv' },
    { name: 'Русский', code: 'ru' }
  ];
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

  setLang(lang: string) {
    this.#wp.setLanguage(lang);
  }
}
