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

  ListeFormations(id:number): Observable<Formation[]>{
    const url = `${this.UrlApi}/direction/${id}`
    return this.http.get<Formation[]>(url);
  }

    
  ConsulterFormation(id:number):Observable<Formation>{
    const url = `${this.UrlApi}/${id}`
    return this.http.get<Formation>(url);
  }


}
