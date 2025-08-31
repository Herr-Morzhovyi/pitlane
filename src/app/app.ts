import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Contact} from './contact/contact';
import {LoadingService} from './services/loading.service';
import {Preloader} from './preloader/preloader';

@Component({
  selector: 'app-root',
  imports: [Contact, Preloader],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  #loadingService = inject(LoadingService);

  isLoading= this.#loadingService.isLoading;

  constructor() {
    this.#loadingService.hide();
  }
}
