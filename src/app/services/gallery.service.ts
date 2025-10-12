import { Injectable, WritableSignal, signal, inject } from '@angular/core';
import { WordpressService } from './wordpress.service';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  #wp = inject(WordpressService);

  rawImages: WritableSignal<any> = signal(null);
  pagesCount: WritableSignal<number> = signal(0);
  currentPage: WritableSignal<number> = signal(1);

  setGalleryData(imagesArr: any[]) {
    if (!imagesArr) return [];
    return imagesArr.map((img) => {
      return {
        itemImageSrc: img.caption,
        thumbnailImageSrc: img.caption,
        alt: img.title,
        title: img.title,
      };
    });
  }

  showMore() {
    if (this.currentPage() >= this.pagesCount()) return;

    this.#wp.getGallery(this.currentPage() + 1).subscribe({
      next: (data: any) => {
        this.rawImages.set([...this.rawImages(), ...data.images]);
        this.currentPage.set(data.current_page);
        this.pagesCount.set(data.total_pages);
      },
    });
  }
}
