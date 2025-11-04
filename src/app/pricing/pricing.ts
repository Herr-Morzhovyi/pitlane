import {Component, signal, WritableSignal} from '@angular/core';
import {PricingCard, PricingCardProps} from '../common/pricing-card/pricing-card';

@Component({
  selector: 'app-pricing',
  imports: [
    PricingCard
  ],
  templateUrl: './pricing.html',
  styleUrl: './pricing.scss'
})
export class Pricing {
  plans: WritableSignal<PricingCardProps[]> = signal([]);
  mockPlans: PricingCardProps[] = [
    {
      title: 'Basic',
      price: 100,
      description: 'Basic plan lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      features: ['Feature 1', 'Feature 2', 'Feature 3']
    },
    {
      title: 'Premium',
      price: 200,
      description: 'Premium plan lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']
    },
    {
      title: 'Enterprise',
      price: 300,
      description: 'Enterprise plan lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5']
    }
  ];

  constructor() {
    this.plans.set(this.mockPlans);
  }
}
