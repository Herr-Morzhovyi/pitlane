import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Contact } from './contact/contact';
import { LoadingService } from './services/loading.service';
import { Preloader } from './preloader/preloader';
import { WordpressService } from './services/wordpress.service';
import { Hero } from './hero/hero';
import { Header } from './header/header';
import { Gallery } from './gallery/gallery';
import { Footer } from './footer/footer';
import { BreakpointService } from './services/breakpoint.service';
@Component({
  selector: 'app-root',
  imports: [Contact, Preloader, Hero, Header, Gallery, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  #loadingService = inject(LoadingService);
  #wp = inject(WordpressService);
  #breakPoint = inject(BreakpointService);

  isLoading = this.#loadingService.isLoading;

  constructor() {
    this.#loadingService.hide();
    this.#wp.getFrontPage().subscribe({
      next: (data) => {
        console.log(data);
        this.#wp.frontPage.set(data);
      },
      error: (e) => console.error(e),
    });

    this.#wp.getGallery().subscribe({
      next: (data) => {
        console.log(data);
      },
    });

    this.#breakPoint.checkMobile().subscribe({
      next: (res) => {
        this.#breakPoint.IsMobile.set(res.matches);
      },
    });
  }

  scroll(el: string) {
    document.querySelector(el)?.scrollIntoView({ behavior: 'smooth' });
  }
}
