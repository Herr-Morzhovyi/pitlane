import { Component, inject, computed } from '@angular/core';
import { Divider } from 'primeng/divider';
import { BreakpointService } from '../services/breakpoint.service';

@Component({
  selector: 'app-footer',
  imports: [Divider],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  standalone: true,
})
export class Footer {
  #breakPoint = inject(BreakpointService);

  isMobile = computed(() => this.#breakPoint.IsMobile());
}
