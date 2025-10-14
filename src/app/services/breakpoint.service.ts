import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {
  #breakPointObserver = inject(BreakpointObserver);

  IsMobile: WritableSignal<boolean> = signal(false);

  checkMobile(): Observable<any> {
    return this.#breakPointObserver.observe('(max-width: 960px)');
  }
}
