import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Wordpress {
  #http = inject(HttpClient);
  apiUrl: string = 'https://admin.pitlane.andrestech.tech/wp-json/wp/v2';

  getPostById(id: number): Observable<any> {
    return this.#http.get(`${this.apiUrl}/pages/${id}`);
  }
}
