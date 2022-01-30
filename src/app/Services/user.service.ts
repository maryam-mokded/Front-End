import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/user';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  UrlApi : string = 'http://localhost:3800/users';

  constructor(
    private http : HttpClient
  ) { }

  ListeUser(): Observable<User[]>{
    return this.http.get<User[]>(this.UrlApi);
  }

}
