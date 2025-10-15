import { trigger, style, transition, animate } from '@angular/animations';

export const fadeInScaleAnimation = trigger('fadeInScale', [
  transition(':enter', [
    style({ transform: 'scale(0.95)', opacity: 0 }),
    animate('0.3s ease-in', style({ transform: 'scale(1)', opacity: 1 })),
  ]),
]);
