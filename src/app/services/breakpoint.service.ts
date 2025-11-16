import {computed, inject, Injectable} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {toSignal} from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {
  #breakPointObserver = inject(BreakpointObserver);

  readonly mobileBreakPoint: string = '(max-width: 650px)';
  readonly tabletBreakpoint: string = '(min-width: 651px) and (max-width: 1095px)';
  readonly desktopBreakPoint: string = '(min-width: 1096px)';

  isMobile = toSignal(this.#breakPointObserver.observe(this.mobileBreakPoint));
  isDesktop = toSignal(
    this.#breakPointObserver.observe(this.desktopBreakPoint)
  );
  isTablet = toSignal(this.#breakPointObserver.observe(this.tabletBreakpoint));

  initialGalleryItems = computed(() => {
    return this.isDesktop()?.matches ? 10 : this.isTablet()?.matches ? 9 : 100;
  });
}
