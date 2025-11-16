import {Component, inject} from '@angular/core';
import {Button} from 'primeng/button';
import {Textarea} from 'primeng/textarea';
import {ReactiveFormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';
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
      let formData: FormData = new FormData();

      // Append each key-value pair from the form value to the FormData object
      Object.keys(this.contact.contactForm.value).forEach(key => {
        if (key === 'wheredidyouhear') {
          // Find the label corresponding to the selected value
          const selectedOption = this.sourcesOptions.find(
            option => option.value === this.contact.contactForm.value[key]
          );
          formData.append(key, selectedOption?.label || '');
        } else {
          formData.append(key, this.contact.contactForm.value[key]);
        }

      });

      formData.append('_wpcf7_unit_tag', this.contact.unitTag());

      this.contact.send(formData);

    }
  }
}
