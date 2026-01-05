import {Component, computed, inject, Signal} from '@angular/core';
import {WordpressService} from '../services/wordpress.service';
import {TranslatePipe} from '@ngx-translate/core';

interface WorkingHours {
  mon_fri?: {
    hours: string;
  } | undefined;
  sat?: {
    hours: string;
  } | undefined;
  sun?: {
    hours: string;
  } | undefined;
}

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  standalone: true,
})
export class Footer {
  #wp = inject(WordpressService);

  address = computed(() => {
    return this.#wp.options()?.address;
  });
  phone = computed(() => {
    return this.#wp.options()?.phone;
  });
  email = computed(() => {
    return this.#wp.options()?.email;
  });
  workingHours: Signal<WorkingHours | undefined> = computed(() => {
    return this.#wp.options()?.working_hours;
  });

  protected readonly encodeURIComponent = encodeURIComponent;
}
