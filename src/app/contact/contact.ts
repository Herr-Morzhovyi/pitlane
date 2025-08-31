import { Component } from '@angular/core';
import {Button} from 'primeng/button';
import {Textarea} from 'primeng/textarea';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {Divider} from 'primeng/divider';
import {InputText} from 'primeng/inputtext';
import {InputMaskModule} from 'primeng/inputmask';
import {SelectModule} from 'primeng/select';
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
    NgOptimizedImage
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  contactForm: FormGroup;
  submitted = false;

  sourcesOptions: SourceOption[] = [
    { label: 'Search Engine', value: 'search' },
    { label: 'Social Media', value: 'social' },
    { label: 'Advertisement', value: 'ad' },
    { label: 'Word of Mouth', value: 'referral' },
    { label: 'Other', value: 'other' }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      source: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // Handle form submission here
    }
  }
}
