import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visite } from './model/Visite';

@Injectable({
  providedIn: 'root'
})
export class VisiteService {

  constructor(private httpClient: HttpClient) { }
  addVisite(v: Visite , idProprety: string): Observable<any> {
    return this.httpClient.post<Visite>('http://localhost:8082/SpringMVC/Visite/Assgin-visite/' + idProprety , v);
  }

  getVisite(): Observable<Visite[]> {
    return this.httpClient.get<Visite[]>('http://localhost:8082/SpringMVC/Visite/retrieve-visite');
  }
  removeVisite(idViste: number): Observable<any> {
    return this.httpClient.delete<Visite>(`http://localhost:8082/SpringMVC/Visite/removeVisite/${idViste}`);
  }
}
