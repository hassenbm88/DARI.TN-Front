import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Abonnement } from './model/abonnement';

@Injectable({
  providedIn: 'root'
})
export class AbonnementService {

  constructor(private httpClient: HttpClient) { }
  addAbonnement(c : Abonnement): Observable<Abonnement> {
    return this.httpClient.post<Abonnement>('http://localhost:8083/SpringMVC/Abonnement/Add-Abonnement',c);
  }

  public getAllAbonnement2(){
    let myData = this.httpClient.get<any>('http://localhost:8083/SpringMVC/Abonnement/retrieve-abonnement');
    return myData
    };
  
  removeAbonnement(idAbonnement: number): Observable<Abonnement> {
    return this.httpClient.delete<Abonnement>('http://localhost:8083/SpringMVC/Abonnement/removeAbonnement/'+idAbonnement);
  }

  getAllAbonnement(): Observable<Abonnement[]> {
    return this.httpClient.get<Abonnement[]>('http://localhost:8083/SpringMVC/Abonnement/retrieve-abonnement');
  }
 
  getAbonnement(id: number): Observable<Abonnement> {
    return this.httpClient.get<Abonnement>('http://localhost:8083/SpringMVC/Abonnement/retrieve-abonnement/'+id);
  }

  updateAbonnement(abonnement: Abonnement, idabonnement: number): Observable<Abonnement> { 
    return this.httpClient.put<Abonnement>('http://localhost:8083/SpringMVC/Abonnement/update-Abonnement/'+idabonnement, abonnement);
  }


}