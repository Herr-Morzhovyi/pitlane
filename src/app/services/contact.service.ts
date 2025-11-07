import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  #fb = inject(FormBuilder);
  #http = inject(HttpClient);
  contactForm!: FormGroup;

  // #url = 'http://localhost:1337/api/messages';

  send(payload: any) {
    return of(null);
  }

  autoFillContactForm(planTitle: string): void {
    this.contactForm.get('message')?.patchValue(
      `Selected plan: ${planTitle}`
    );
  }

  createForm() {
    this.contactForm = this.#fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      wheredidyouhear: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
}
