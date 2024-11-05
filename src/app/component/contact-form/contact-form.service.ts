import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ContactFormService {

  API = environment.api

  constructor(private http: HttpClient, private route: Router) { }

  // sendEmail(to: string, subject: string, body: string) {
  //   return this.http.post(`${this.API}/contact`, emailData);
  // }

  sendEmail(to: string, subject: string, body: string): void {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    const url = `https://empreiteira-alta-construcoes-api-production.up.railway.app/api/contact?to=${to}&subject=${encodedSubject}&body=${encodedBody}`;

    this.http.get(url).subscribe();
  }
}
