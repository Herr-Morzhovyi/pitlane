import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  #http = inject(HttpClient);

  // #url = 'http://localhost:1337/api/messages';

  send(payload: any) {
    return of(null);
  }
}
