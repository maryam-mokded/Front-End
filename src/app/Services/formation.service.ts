import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formation } from '../Models/formation';
import { AuthService } from './auth.service';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class FormationService {

  UrlApi : string = 'http://localhost:3800/formations';

  constructor(
    private http : HttpClient,
    private authService : AuthService,

  ) { }

  ListeFormationsDirection(id:number): Observable<Formation[]>{
    let jwt = this.authService.getToken();
    jwt ="Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const url = `${this.UrlApi}/direction/${id}`
    return this.http.get<Formation[]>(url,{headers:httpHeaders});
  }

  ListeFormationsServiceF(id:number): Observable<Formation[]>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const url = `${this.UrlApi}/ServiceF/${id}`
    return this.http.get<Formation[]>(url,{headers:httpHeaders});
  }

  ConsulterFormation(id:number):Observable<Formation>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const url = `${this.UrlApi}/${id}`
    return this.http.get<Formation>(url,{headers:httpHeaders});
  }


  AjouterFormation(id:number,formation:Formation): Observable<Formation>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const url =`${this.UrlApi}/${id}`;
    return this.http.post<Formation>(url, formation ,{headers:httpHeaders});
  }

  supprimerFormation(id:number){
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const url =`${this.UrlApi}/${id}`;
    return this.http.delete(url,{headers:httpHeaders});
  }

  modifierFormation(idF:number,idU:number,f:Formation):Observable<Formation>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const url =`${this.UrlApi}/${idF}/${idU}`;
    return this.http.put<Formation>(url,f,{headers:httpHeaders});
  }

  EnvoyerFormation(id:number):Observable<Formation>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const url =`${this.UrlApi}/envoyer/${id}`;
    return this.http.put<Formation>(url,{headers:httpHeaders});
  }

} 

