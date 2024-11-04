import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class ContactFormService {

  API = environment.api

  constructor(private http: HttpClient, private route: Router) { }

  sendEmail(to: string, subject: string, body: string) {
    const emailData = { to, subject, body };
    console.log(this.http.post(`${this.API}/contact`, emailData))
    console.log(emailData)
    return this.http.post(`${this.API}/contact`, emailData);
  }

}
