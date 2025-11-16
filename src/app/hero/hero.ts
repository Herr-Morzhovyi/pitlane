import { Component, computed, inject } from '@angular/core';
import { WordpressService } from '../services/wordpress.service';
import { stripHtml } from '../utils';
import { PrimaryBtn } from '../common/primary-btn/primary-btn';
import { BreakpointService } from '../services/breakpoint.service';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-hero',
  imports: [PrimaryBtn],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  #wp = inject(WordpressService);
  #breakPoint = inject(BreakpointService);

  title = computed(() => this.#wp.frontPage()?.title?.rendered);
  subtitle = computed(() => stripHtml(this.#wp.frontPage()?.content?.rendered));
  buttonText = computed(() => this.#wp.frontPage()?.hero_button_text);
  buttonLink = computed(() => this.#wp.frontPage()?.hero_button_url);
  featuredImageUrl = computed(() => this.#wp.frontPage()?.featured_image_url);
  isMobile = computed(() => {
    return this.#breakPoint.isMobile()?.matches;
  });
}
