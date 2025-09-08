import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Contact} from './contact/contact';
import {LoadingService} from './services/loading.service';
import {Preloader} from './preloader/preloader';
import {WordpressService} from './services/wordpress.service';

@Component({
  selector: 'app-root',
  imports: [Contact, Preloader],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  #loadingService = inject(LoadingService);
  #wp = inject(WordpressService);

  isLoading= this.#loadingService.isLoading;

  constructor() {
    this.#loadingService.hide();
    this.#wp.getFrontPage().subscribe({
      next: (data) => console.log(data),
      error: (e) => console.error(e),
    });
  }
}
