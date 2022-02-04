import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mail } from '../Models/mail';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})

export class MailsService {

  UrlApi : string = 'http://localhost:3800/contacts';

  constructor(
    private http : HttpClient
  ) { }

  ListeMail(): Observable<Mail[]>{
    return this.http.get<Mail[]>(this.UrlApi);
  }

  ConsulterMail(id:number):Observable<Mail>{
    const url = `${this.UrlApi}/${id}`
    return this.http.get<Mail>(url);
  }

  AjouterMail(mail:Mail):Observable<Mail>{
    return this.http.post<Mail>(this.UrlApi,mail,httpOptions);
  }

  supprimerMail(id:number){
    const url =`${this.UrlApi}/${id}`;
    return this.http.delete(url,httpOptions);
  }

}
