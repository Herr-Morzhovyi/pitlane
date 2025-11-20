import {computed, effect, inject, Injectable, signal, WritableSignal} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WordpressService {
  #http = inject(HttpClient);
  frontPage: WritableSignal<any> = signal(null);
  currentLanguage: WritableSignal<any> = signal('en');
  languages: WritableSignal<any> = signal([]);
  frontPageId = signal(0);

  constructor() {
    // 1. When languages or currentLanguage changes → update frontPageId
    effect(() => {
      const langs = this.languages();
      const lang = this.currentLanguage();
      console.log(langs, lang);
      const id = langs.find((oneOfLangs: {lang: string, post_id: number}) => oneOfLangs.lang === lang)?.post_id;
      this.frontPageId.set(id);
      console.log(id);
    });

    // 2. When frontPageId changes → fetch the front page automatically
    effect(() => {
      const id = this.frontPageId();
      if (!id) return;
      this.#http.get(`https://pitlain.brigada-dev.com/wp-json/wp/v2/pages/${id}`)
        .subscribe(page => this.frontPage.set(page));
    });
  }

  getGallery(page: number = 1, perPage: number) {
    const params = {
      page: page.toString(),
      per_page: perPage.toString(),
      front_page_id: this.frontPageId(),
    };

    return this.#http.get(
      'https://pitlain.brigada-dev.com/wp-json/theme/v1/gallery',
      { params }
    );
  }

  getFrontPageTranslations() {
    return this.#http.get(
      'https://pitlain.brigada-dev.com/wp-json/site/v1/front-page-translations'
    );
  }

  setLanguage(lang: string) {
    this.currentLanguage.set(lang);
  }

}
