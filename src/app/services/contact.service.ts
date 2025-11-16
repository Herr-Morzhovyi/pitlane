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
  #contactFormID = '52';

  #contactFormApiEndpoint = 'https://pitlain.brigada-dev.com/wp-json/contact-form-7/v1/contact-forms/' + this.#contactFormID + '/feedback';

  send(formData: any): void {
    this.#http.post(this.#contactFormApiEndpoint, formData)
      .subscribe(response => {
        console.log(response);
      })
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
