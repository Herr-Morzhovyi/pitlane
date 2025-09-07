import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  #http = inject(HttpClient);

  #url = 'http://localhost:1337/api';

  getReviewsSlides(): Observable<{ data: any[] }> {
    return this.#http.get<{ data: any[] }>(`${this.#url}/review-slides`);
  }

  getReviewsSection(): Observable<{ data: any[] }> {
    return this.#http.get<{ data: any[] }>(`${this.#url}/review-section`);
  }
}
