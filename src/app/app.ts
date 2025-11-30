import {ChangeDetectionStrategy, Component, effect, inject} from '@angular/core';
import {Contact} from './contact/contact';
import {LoadingService} from './services/loading.service';
import {Preloader} from './preloader/preloader';
import {WordpressService} from './services/wordpress.service';
import {Hero} from './hero/hero';
import {Header} from './header/header';
import {Gallery} from './gallery/gallery';
import {Footer} from './footer/footer';
import {GalleryService} from './services/gallery.service';
import {Pricing} from './pricing/pricing';
import {BreakpointService} from './services/breakpoint.service';
import {ContactService} from './services/contact.service';
import {Toast} from 'primeng/toast';
import {switchMap, tap} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [Contact, Preloader, Hero, Header, Gallery, Footer, Pricing, Toast],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  #loadingService = inject(LoadingService);
  #wp = inject(WordpressService);
  #gallery = inject(GalleryService);
  #breakpointService = inject(BreakpointService);
  #contact = inject(ContactService);

  isLoading = this.#loadingService.isLoading;

  constructor() {
    this.#wp.initTranslations();

    this.#wp.getOptionsPage().subscribe((optionsPage) => {
      this.#wp.options.set(optionsPage);
      console.log(optionsPage)
    })

    this.#wp.getFrontPageTranslations().subscribe({
      next: (data) => {
        this.#wp.languages.set(data);
        this.#loadingService.hide();
      }
    });

    this.#contact.getContactFormRefill().subscribe(data => {
      this.#contact.unitTag.set(data['_wpcf7_unit_tag']);
    })
    effect(() => {
      this.#breakpointService.isDesktop();
      this.#breakpointService.isTablet();
      this.#breakpointService.isMobile();
      this.#wp.getGallery(1, this.#breakpointService.initialGalleryItems()).subscribe({
        next: (data: any) => {
          this.#gallery.rawImages.set(data.gallery);
          this.#gallery.currentPage.set(data.page);
          this.#gallery.pagesCount.set(data.total_pages);
          console.log(data);
        },
      });
    });


    console.log(this.#breakpointService.isDesktop());
    console.log(this.#breakpointService.isTablet());
    console.log(this.#breakpointService.isMobile());

    this.#wp.getPrivacyPolicy();
  }

  scroll(el: string) {
    document.querySelector(el)?.scrollIntoView({ behavior: 'smooth' });
  }
}
