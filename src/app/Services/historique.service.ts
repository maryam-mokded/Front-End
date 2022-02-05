import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Historique } from '../Models/historique';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {

  UrlApi : string = 'http://localhost:3800/historique';

  constructor(
    private http : HttpClient
  ) { }

  ListeHistorique(id:number): Observable<Historique[]>{
    const url = `${this.UrlApi}/direction/${id}`
    return this.http.get<Historique[]>(url);
  }

  ConsulterHistorique(id:number):Observable<Historique>{
    const url = `${this.UrlApi}/${id}`
    return this.http.get<Historique>(url);
  }


  AcceptFormation(id:number){
    const url =`${this.UrlApi}/Accept/${id}`;
    return this.http.post(url,httpOptions);
  }

  RefuseFormation(id:number){
    const url =`${this.UrlApi}/Refuse/${id}`;
    return this.http.post(url,httpOptions);
  }




}


