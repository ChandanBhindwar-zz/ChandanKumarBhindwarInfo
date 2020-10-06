import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MailService {

  environment = environment.SENDGRID_API_KEY;
  apiUrl = environment.apiUrl;

  // sgMail.setApiKey(environment.SENDGRID_API_KEY);

  constructor(private httpClient: HttpClient) {
    // sgMail.setApiKey(environment.SENDGRID_API_KEY);
  }


  sendMail(data) {
    return this.httpClient.post(this.apiUrl + 'api/mail', data);
  }

  getTest(){
    return this.httpClient.get(this.apiUrl + 'api/test');

  }

}
