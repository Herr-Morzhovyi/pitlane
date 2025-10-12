import { Component, signal } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { CommonModule } from '@angular/common';
import { PrimaryBtn } from '../common/primary-btn/primary-btn';

@Component({
  selector: 'app-gallery',
  imports: [GalleriaModule, CommonModule, PrimaryBtn],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  displayCustom: boolean = false;

  activeIndex: number = 0;

  title = signal('Gallery');
  images = signal([
    {
      itemImageSrc: 'assets/gallery-item.png',
      thumbnailImageSrc: 'assets/gallery-item.png',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      itemImageSrc: 'assets/gallery-item.png',
      thumbnailImageSrc: 'assets/gallery-item.png',
      alt: 'Description for Image 2',
      title: 'Title 2',
    },
    {
      itemImageSrc: 'assets/gallery-item.png',
      thumbnailImageSrc: 'assets/gallery-item.png',
      alt: 'Description for Image 3',
      title: 'Title 3',
    },
    {
      itemImageSrc: 'assets/gallery-item.png',
      thumbnailImageSrc: 'assets/gallery-item.png',
      alt: 'Description for Image 4',
      title: 'Title 4',
    },
    {
      itemImageSrc: 'assets/gallery-item.png',
      thumbnailImageSrc: 'assets/gallery-item.png',
      alt: 'Description for Image 5',
      title: 'Title 5',
    },
    {
      itemImageSrc: 'assets/gallery-item.png',
      thumbnailImageSrc: 'assets/gallery-item.png',
      alt: 'Description for Image 6',
      title: 'Title 6',
    },
    {
      itemImageSrc: 'assets/gallery-item.png',
      thumbnailImageSrc: 'assets/gallery-item.png',
      alt: 'Description for Image 7',
      title: 'Title 7',
    },
    {
      itemImageSrc: 'assets/gallery-item.png',
      thumbnailImageSrc: 'assets/gallery-item.png',
      alt: 'Description for Image 8',
      title: 'Title 8',
    },
    {
      itemImageSrc: 'assets/gallery-item.png',
      thumbnailImageSrc: 'assets/gallery-item.png',
      alt: 'Description for Image 9',
      title: 'Title 9',
    },
    {
      itemImageSrc: 'assets/gallery-item.png',
      thumbnailImageSrc: 'assets/gallery-item.png',
      alt: 'Description for Image 10',
      title: 'Title 10',
    },
    {
      itemImageSrc: 'assets/gallery-item.png',
      thumbnailImageSrc: 'assets/gallery-item.png',
      alt: 'Description for Image 11',
      title: 'Title 11',
    },
    {
      itemImageSrc: 'assets/gallery-item.png',
      thumbnailImageSrc: 'assets/gallery-item.png',
      alt: 'Description for Image 12',
      title: 'Title 12',
    },
    {
      itemImageSrc: 'assets/gallery-item.png',
      thumbnailImageSrc: 'assets/gallery-item.png',
      alt: 'Description for Image 13',
      title: 'Title 13',
    },
    {
      itemImageSrc: 'assets/gallery-item.png',
      thumbnailImageSrc: 'assets/gallery-item.png',
      alt: 'Description for Image 14',
      title: 'Title 14',
    },
    {
      itemImageSrc: 'assets/gallery-item.png',
      thumbnailImageSrc: 'assets/gallery-item.png',
      alt: 'Description for Image 15',
      title: 'Title 15',
    },
  ]);

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
}
