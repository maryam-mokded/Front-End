import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Direction } from '../Models/direction';
import { AuthService } from './auth.service';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class DirectionService {

  UrlApi : string = 'https://backendperfectionnement.herokuapp.com/directions';

  constructor(
    private http : HttpClient,
    private authService : AuthService,
  ) { }

  ListeDirection(): Observable<Direction[]>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Direction[]>(this.UrlApi,{headers:httpHeaders});
  }


  ConsulterDirection(id:number):Observable<Direction>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const url = `${this.UrlApi}/${id}`
    return this.http.get<Direction>(url,{headers:httpHeaders});
  }

}
