import { Component, computed, inject } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { CommonModule } from '@angular/common';
import { PrimaryBtn } from '../common/primary-btn/primary-btn';
import { GalleryService } from '../services/gallery.service';
import { BreakpointService } from '../services/breakpoint.service';
import { fadeInScaleAnimation } from '../animations/animations/animations';
import { Carousel } from 'primeng/carousel';

@Component({
  selector: 'app-gallery',
  imports: [GalleriaModule, CommonModule, PrimaryBtn, Carousel],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
  animations: [fadeInScaleAnimation],
})
export class Gallery {
  #gallery = inject(GalleryService);
  #breakPoint = inject(BreakpointService);

  displayCustom: boolean = false;
  activeIndex: number = 0;

  images = this.#gallery.rawImages;

  allShown = computed(
    () => this.#gallery.currentPage() >= this.#gallery.pagesCount()
  );
  isMobile = computed(() => {
    return this.#breakPoint.isMobile()?.matches;
  });

  imageClick(index: number): void {
    this.activeIndex = index;
    this.displayCustom = true;
  }

  toggleShowMore(): void {
    if (this.allShown()) {
      this.#gallery.rawImages.update((images) => images.slice(0, this.#breakPoint.initialGalleryItems()));
      this.#gallery.currentPage.set(1);
      return;
    }
    this.#gallery.showMore();
  }
}
