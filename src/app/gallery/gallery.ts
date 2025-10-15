import { Component, computed, inject } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { CommonModule } from '@angular/common';
import { PrimaryBtn } from '../common/primary-btn/primary-btn';
import { GalleryService } from '../services/gallery.service';
import { fadeInScaleAnimation } from '../animations/animations/animations';

@Component({
  selector: 'app-gallery',
  imports: [GalleriaModule, CommonModule, PrimaryBtn],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
  animations: [fadeInScaleAnimation],
})
export class Gallery {
  #gallery = inject(GalleryService);

  displayCustom: boolean = false;
  activeIndex: number = 0;

  images = this.#gallery.rawImages;

  hideButton = computed(
    () => this.#gallery.currentPage() >= this.#gallery.pagesCount()
  );

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
  }

  showMore() {
    this.#gallery.showMore();
  }
}
