import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {
  #http = inject(HttpClient);

  getFrontPage() {
    return this.#http.get('https://pitlain.brigada-dev.com/wp-json/wp/v2/pages/6');
  }
}
