import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  #isLoading = signal(true);
  readonly #minimumLoadTime = 3000;

  isLoading = this.#isLoading.asReadonly();

  show() {
    this.#isLoading.set(true);
  }

  hide() {
    setTimeout(() => {
      this.#isLoading.set(false);
    }, this.#minimumLoadTime);
  }
}
