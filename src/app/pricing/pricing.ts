import {Component, computed, inject} from '@angular/core';
import {PricingCard} from '../common/pricing-card/pricing-card';
import {WordpressService} from '../services/wordpress.service';

@Component({
  selector: 'app-pricing',
  imports: [
    PricingCard
  ],
  templateUrl: './pricing.html',
  styleUrl: './pricing.scss'
})
export class Pricing {
  #wp = inject(WordpressService);

  title = computed(() => this.#wp.frontPage()?.pricing_title);
  subtitle = computed(() => this.#wp.frontPage()?.pricing_subtitle);
  plans = computed(() => this.#wp.frontPage()?.pricing_items);
}
