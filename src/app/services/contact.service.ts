import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessageService} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  #fb = inject(FormBuilder);
  #http = inject(HttpClient);
  #messageService = inject(MessageService);
  contactForm!: FormGroup;
  #contactFormID = '52';
  unitTag = signal('');

  #contactFormApiEndpoint = 'https://pitlain.brigada-dev.com/wp-json/contact-form-7/v1/contact-forms/' + this.#contactFormID + '/feedback';

  send(formData: any): void {
    this.#http.post(this.#contactFormApiEndpoint, formData)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.#messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Your message has been sent successfully!',
            life: 3000
          });
        },
        error: (error) => {
          console.error(error);
          this.#messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Failed to send message. Please try again.',
            life: 3000
          });
        }
      })

  }

  autoFillContactForm(planTitle: string): void {
    this.contactForm.get('message')?.patchValue(
      `Selected plan: ${planTitle}`
    );
  }

  createForm() {
    this.contactForm = this.#fb.group({
      names: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      wheredidyouhear: [''],
      message: ['', Validators.required]
    });
  }


  getContactFormRefill(): Observable<any> {
    return this.#http.get(
      'https://pitlain.brigada-dev.com/wp-json/headless-cf7/v1/form-fields/52'
    );
  }
}
