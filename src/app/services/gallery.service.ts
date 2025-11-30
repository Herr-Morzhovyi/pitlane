import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {WordpressService} from './wordpress.service';
import {BreakpointService} from './breakpoint.service';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  #wp = inject(WordpressService);
  #breakpointService = inject(BreakpointService);

  rawImages: WritableSignal<any> = signal(null);
  pagesCount: WritableSignal<number> = signal(0);
  currentPage: WritableSignal<number> = signal(1);

  showMore() {
    if (this.currentPage() >= this.pagesCount()) return;
    console.log(this.currentPage());
    this.#wp.getGallery(this.currentPage() + 1, this.#breakpointService.initialGalleryItems()).subscribe({
      next: (data: any) => {
        this.rawImages.set([...this.rawImages(), ...data.gallery]);
        this.currentPage.set(data.page);
        this.pagesCount.set(data.total_pages);
      },
    });
  }
}
