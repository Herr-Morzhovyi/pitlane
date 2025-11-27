import {Component, computed, inject} from '@angular/core';
import {Divider} from 'primeng/divider';
import {BreakpointService} from '../services/breakpoint.service';
import {WordpressService} from '../services/wordpress.service';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [Divider, TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  standalone: true,
})
export class Footer {
  #breakPoint = inject(BreakpointService);
  #wp = inject(WordpressService);

  address = computed(() => {
    return this.#wp.options()?.address;
  });
  addressLink = computed(() => {
    return this.#wp.options()?.address_link;
  })
  phone = computed(() => {
    return this.#wp.options()?.phone;
  });
  email = computed(() => {
    return this.#wp.options()?.email;
  });
  workingHours = computed(() => {
    return this.#wp.options()?.workingHours;
  });

  isDesktop = computed(() => {
    return this.#breakPoint.isDesktop()?.matches;
  });
  protected readonly encodeURIComponent = encodeURIComponent;
}
