import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mail } from '../Models/mail';
import { AuthService } from './auth.service';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})

export class MailsService {

  UrlApi : string = 'http://localhost:3800/contacts';

  constructor(
    private http : HttpClient,
    private authService : AuthService,
  ) { }

  ListeMail(): Observable<Mail[]>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Mail[]>(this.UrlApi,{headers:httpHeaders});
  }

  ConsulterMail(id:number):Observable<Mail>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const url = `${this.UrlApi}/${id}`
    return this.http.get<Mail>(url,{headers:httpHeaders});
  }

  AjouterMail(mail:Mail):Observable<Mail>{
    return this.http.post<Mail>(this.UrlApi,mail,httpOptions);
  }

  supprimerMail(id:number){
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const url =`${this.UrlApi}/${id}`;
    return this.http.delete(url,{headers:httpHeaders});
  }

}
