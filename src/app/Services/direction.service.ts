import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Direction } from '../Models/direction';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class DirectionService {

  UrlApi : string = 'http://localhost:3800/directions';

  constructor(
    private http : HttpClient
  ) { }

  ListeDirection(): Observable<Direction[]>{
    return this.http.get<Direction[]>(this.UrlApi);
  }

  
  ConsulterDirection(id:number):Observable<Direction>{
    const url = `${this.UrlApi}/${id}`
    return this.http.get<Direction>(url);
  }
  
}
