import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notification } from '../Models/notification';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  UrlApi : string = 'http://localhost:3800/notifications';

  constructor(
    private http : HttpClient
  ) { }

  ListeNotification(id:number): Observable<Notification[]>{
    const url = `${this.UrlApi}/user/${id}`
    return this.http.get<Notification[]>(url);
  }


  AjouterNotification(id:number): Observable<Notification>{
    const url =`${this.UrlApi}/envoyerP/${id}`;
    return this.http.post<Notification>(url,httpOptions);
  }

  AjouterNotificationSF(id:number): Observable<Notification>{    
    const url =`${this.UrlApi}/${id}`;
    return this.http.post<Notification>(url,httpOptions);
  }

  supprimerNotification(id:number){
    const url =`${this.UrlApi}/${id}`;
    return this.http.delete(url,httpOptions);
  }


}
