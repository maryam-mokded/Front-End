import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formation } from '../Models/formation';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  
  UrlApi : string = 'http://localhost:3800/formations';

  constructor(
    private http : HttpClient
  ) { }

  ListeFormationsDirection(id:number): Observable<Formation[]>{
    const url = `${this.UrlApi}/direction/${id}`
    return this.http.get<Formation[]>(url);
  }

  ListeFormationsServiceF(id:number): Observable<Formation[]>{
    const url = `${this.UrlApi}/ServiceF/${id}`
    return this.http.get<Formation[]>(url);
  } 
  
  ConsulterFormation(id:number):Observable<Formation>{
    const url = `${this.UrlApi}/${id}`
    return this.http.get<Formation>(url);
  }

  
  AjouterFormation(id:number,formation:Formation): Observable<Formation>{
    const url =`${this.UrlApi}/${id}`;
    return this.http.post<Formation>(url, formation ,httpOptions);
  }

  supprimerFormation(id:number){
    const url =`${this.UrlApi}/${id}`;
    return this.http.delete(url,httpOptions);
  }

  modifierFormation(idF:number,idU:number,f:Formation):Observable<Formation>{
    const url =`${this.UrlApi}/${idF}/${idU}`;
    return this.http.put<Formation>(url,f);
  }

  EnvoyerFormation(id:number):Observable<Formation>{
    const url =`${this.UrlApi}/envoyer/${id}`;
    return this.http.put<Formation>(url,httpOptions);
  }

}

