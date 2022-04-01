import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Historique } from '../Models/historique';
import { AuthService } from './auth.service';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {

  UrlApi : string = 'https://backendperfectionnement.herokuapp.com/historique';

  constructor(
    private http : HttpClient,
    private authService : AuthService,
  ) { }

  ListeHistorique(id:number): Observable<Historique[]>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const url = `${this.UrlApi}/direction/${id}`
    return this.http.get<Historique[]>(url,{headers:httpHeaders});
  }

  ConsulterHistorique(id:number):Observable<Historique>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const url = `${this.UrlApi}/${id}`
    return this.http.get<Historique>(url,{headers:httpHeaders});
  }


  AcceptFormation(id:number){
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const url =`${this.UrlApi}/Accept/${id}`;
    return this.http.post(url,httpOptions,{headers:httpHeaders});
  }

  RefuseFormation(id:number){
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const url =`${this.UrlApi}/Refuse/${id}`;
    return this.http.post(url,httpOptions,{headers:httpHeaders});
  }

}


