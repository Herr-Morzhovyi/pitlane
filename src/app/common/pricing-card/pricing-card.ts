import {Component, inject, input, InputSignal, signal, WritableSignal} from '@angular/core';
import {PrimaryBtn} from '../primary-btn/primary-btn';
import {Divider} from 'primeng/divider';
import {DecimalPipe} from '@angular/common';
import {ContactService} from '../../services/contact.service';

export interface PricingPlan {
  title: string;
  price: number;
  features: { feature: string; }[];
  description: string;
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
  #contactService = inject(ContactService);
  plan: InputSignal<PricingPlan> = input.required();

  autofillContactForm(planTitle: string): void {
    this.#contactService.autoFillContactForm(planTitle);
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
