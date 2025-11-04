import {Component, input, InputSignal, signal, WritableSignal} from '@angular/core';
import {PrimaryBtn} from '../primary-btn/primary-btn';
import {Divider} from 'primeng/divider';
import {DecimalPipe} from '@angular/common';

export interface PricingCardProps {
  title: string;
  price: number;
  description: string;
  features: string[];
  badge?: string;
}

@Component({
  selector: 'app-pricing-card',
  imports: [
    PrimaryBtn,
    Divider,
    DecimalPipe
  ],
  templateUrl: './pricing-card.html',
  styleUrl: './pricing-card.scss'
})
export class PricingCard {
  plan: InputSignal<PricingCardProps> = input.required<PricingCardProps>();
}
