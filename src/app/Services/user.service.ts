import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/user';
import { AuthService } from './auth.service';
import { NumberCardComponent } from '@swimlane/ngx-charts';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  UrlApi : string = 'https://backendperfectionnement.herokuapp.com/users';

  constructor(
    private http : HttpClient,
    private authService : AuthService,
  ) { }

  ListeUser(): Observable<User[]>{
    let jwt = this.authService.getToken();
    jwt ="Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<User[]>(this.UrlApi,{headers:httpHeaders});
  }

  ConsulterEmployee(id:number):Observable<User>{
    let jwt = this.authService.getToken();
    jwt ="Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const url = `${this.UrlApi}/${id}`
    return this.http.get<User>(url,{headers:httpHeaders});
  }

  getPiloteDetails(id:number):Observable<User>{
    let jwt = this.authService.getToken();
    jwt ="Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const url = `${this.UrlApi}/pilote/${id}`
    return this.http.get<User>(url,{headers:httpHeaders});
  }

  getUserConnectedDetails(username?:string):Observable<User>{
    let jwt = this.authService.getToken();
    jwt ="Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const url = `${this.UrlApi}/username/${username}`
    return this.http.get<User>(url,{headers:httpHeaders});
  }


  ListeUserDirection(id:number): Observable<User[]>{
    let jwt = this.authService.getToken();
    jwt ="Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const url = `${this.UrlApi}/direction/${id}`
    return this.http.get<User[]>(url,{headers:httpHeaders});
  }

  AjouterEmployee(id:number,user:User): Observable<User>{
    let jwt = this.authService.getToken();
    jwt ="Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const url =`${this.UrlApi}/${id}`;
    return this.http.post<User>(url,user,{headers:httpHeaders});
  }

  modifierUser(idD:number,idU:number,u:User):Observable<User>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const url =`${this.UrlApi}/${idD}/${idU}`;
    return this.http.put<User>(url,u,{headers:httpHeaders});
  }

  modifierUserProfil(id:number,u:User):Observable<User>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const url =`${this.UrlApi}/${id}`;
    return this.http.put<User>(url,u,httpOptions);
  }

}
