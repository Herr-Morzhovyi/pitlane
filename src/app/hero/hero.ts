import {Component, computed, inject} from '@angular/core';
import {WordpressService} from '../services/wordpress.service';
import {stripHtml} from '../utils';
import {PrimaryBtn} from '../common/primary-btn/primary-btn';

@Component({
  selector: 'app-hero',
  imports: [PrimaryBtn],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  #wp = inject(WordpressService);

  title = computed(() => this.#wp.frontPage()?.title?.rendered);
  subtitle = computed(() => stripHtml(this.#wp.frontPage()?.content?.rendered));
  buttonText = computed(() => this.#wp.frontPage()?.hero_button_text);
  featuredImageUrl = computed(() => this.#wp.frontPage()?.featured_image_url);

  scroll(el: string): void {
    document.querySelector(el)?.scrollIntoView({ behavior: 'smooth' });
  }
}
