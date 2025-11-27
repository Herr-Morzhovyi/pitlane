import {
  APP_INITIALIZER,
  ApplicationConfig, importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection
} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {providePrimeNG} from 'primeng/config';
import {provideAnimations} from '@angular/platform-browser/animations';
import {MyPreset} from '../theme-preset';
import {HttpClient, provideHttpClient} from '@angular/common/http';
import {MessageService} from 'primeng/api';
import {provideTranslateService, TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {provideTranslateHttpLoader, TranslateHttpLoader} from '@ngx-translate/http-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: '/assets/i18n/',
        suffix: '.json'
      }),
      fallbackLang: 'en',
      lang: 'en'  // optional — initial language
    }),
    providePrimeNG({
      theme: {
        preset: MyPreset
      }
    }),
    provideAnimations(),
    MessageService,
  ]
};
