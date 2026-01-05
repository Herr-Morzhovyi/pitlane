import {effect, inject, Injectable, signal, WritableSignal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class WordpressService {
  #http = inject(HttpClient);
  #translate = inject(TranslateService);
  frontPage: WritableSignal<any> = signal(null);
  currentLanguage: WritableSignal<any> = signal('en');
  languages: WritableSignal<any> = signal([]);
  frontPageId = signal(0);
  options: WritableSignal<any> = signal({});
  privacyPage: WritableSignal<any> = signal({});

  constructor() {
    // 1. When languages or currentLanguage changes → update frontPageId
    effect(() => {
      const langs = this.languages();
      const lang = this.currentLanguage();
      const id = langs.find((oneOfLangs: {lang: string, post_id: number}) => oneOfLangs.lang === lang)?.post_id;
      this.frontPageId.set(id);
    });

    // 2. When frontPageId changes → fetch the front page automatically
    effect(() => {
      const id = this.frontPageId();
      if (!id) return;
      this.#http.get(`https://pitlain.brigada-dev.com/wp-json/wp/v2/pages/${id}`)
        .subscribe((page) => {
          console.log(page);
          this.frontPage.set(page);
        });
    });

    effect(() => {
      localStorage.setItem('lang', this.currentLanguage());
      this.#translate.use(this.currentLanguage());
    });
  }

  initTranslations() {
    const lang = localStorage.getItem('lang') ?? 'en';

    this.currentLanguage.set(lang);

    this.#translate.setFallbackLang('en');
    this.#translate.use(lang);
  }

  getGallery(page: number = 1, perPage: number) {
    const params = {
      page: page,
      per_page: perPage.toString(),
    };

    return this.#http.get(
      'https://pitlain.brigada-dev.com/wp-json/site/v1/gallery',
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

  getOptionsPage() {
    return this.#http.get(
      'https://pitlain.brigada-dev.com/wp-json/site/v1/settings'
    );
  }

  getPrivacyPolicy() {
    this.#http.get('https://pitlain.brigada-dev.com/wp-json/wp/v2/pages/3')
      .subscribe((page) => {
        this.privacyPage.set(page);
      });
  }
}
