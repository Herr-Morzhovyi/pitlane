import {Component, inject} from '@angular/core';
import {Button} from 'primeng/button';
import {Textarea} from 'primeng/textarea';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {Divider} from 'primeng/divider';
import {InputText} from 'primeng/inputtext';
import {InputMaskModule} from 'primeng/inputmask';
import {SelectModule} from 'primeng/select';
import {ContactService} from '../services/contact.service';
interface SourceOption {
  label: string;
  value: string;
}
@Component({
  selector: 'app-contact',
  imports: [
    Button,
    Textarea,
    ReactiveFormsModule,
    NgClass,
    Divider,
    InputText,
    InputMaskModule,
    SelectModule,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  contact = inject(ContactService);


  submitted = false;

  sourcesOptions: SourceOption[] = [
    { label: 'Search Engine', value: 'search' },
    { label: 'Social Media', value: 'social' },
    { label: 'Advertisement', value: 'ad' },
    { label: 'Word of Mouth', value: 'referral' },
    { label: 'Other', value: 'other' }
  ];

  constructor() {
    this.contact.createForm();

  }

  onSubmit() {
    this.submitted = true;

    if (this.contact.contactForm.valid) {
      const payload = this.contact.contactForm.getRawValue();
      this.contact.send(payload).subscribe({
        next: () => this.contact.contactForm.reset(),
        error: (e) => console.error(e),
      });
    }
  }
}
