import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../../services/reviews.service';
import { forkJoin } from 'rxjs';
import { CarouselModule } from 'primeng/carousel';
import { PrimeIcons } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  imports: [CarouselModule, CommonModule],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss',
})
export class Reviews implements OnInit {
  public sectionData: any;
  public slidesData: any;
  constructor(private reviewsService: ReviewsService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    forkJoin({
      slidesData: this.reviewsService.getReviewsSlides(),
      sectionData: this.reviewsService.getReviewsSection(),
    }).subscribe(({ slidesData, sectionData }) => {
      this.sectionData = sectionData.data ?? [];
      this.slidesData = this.setSlideData(slidesData.data);
      console.log(this.sectionData);
    });
  }

  setSlideData(data: any) {
    return data.map((element: any) => ({
      ...element,
      stars: Array(element.Rating),
    }));
  }
}
