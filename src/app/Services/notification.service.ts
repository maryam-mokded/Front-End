import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notification } from '../Models/notification';
import { AuthService } from './auth.service';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  UrlApi : string = 'https://backendperfectionnement.herokuapp.com/notifications';

  constructor(
    private http : HttpClient,
    private authService : AuthService,
  ) { }

  ListeNotification(id:number): Observable<Notification[]>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const url = `${this.UrlApi}/user/${id}`
    return this.http.get<Notification[]>(url,{headers:httpHeaders});
  }


  AjouterNotification(id:number): Observable<Notification>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const url =`${this.UrlApi}/envoyerP/${id}`;
    return this.http.post<Notification>(url,{headers:httpHeaders});
  }

  AjouterNotificationSF(id:number): Observable<Notification>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const url =`${this.UrlApi}/${id}`;
    return this.http.post<Notification>(url,{headers:httpHeaders});
  }

  supprimerNotification(id:number){
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const url =`${this.UrlApi}/${id}`;
    return this.http.delete(url,{headers:httpHeaders});
  }


}
