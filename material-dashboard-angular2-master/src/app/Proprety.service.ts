import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proprety } from './model/Proprety';

@Injectable({
  providedIn: 'root'
})
export class PropretyService {

  constructor(private httpClient: HttpClient) { }
  addProperty(p: Proprety): Observable<any> {
    return this.httpClient.post<Proprety>('http://localhost:8082/SpringMVC/Proprety/Add-Property', p);
  }

  getProprety(): Observable<Proprety[]> {
    return this.httpClient.get<Proprety[]>('http://localhost:8082/SpringMVC/Proprety/retrieve-property');
  }
  removeProprety(idProprety: number): Observable<any> {
    return this.httpClient.delete<Proprety>(`http://localhost:8082/SpringMVC/Proprety/removeProprety/${idProprety}`);
  }
  retrievePropretysByName(nom: string): Observable<Proprety[]> {
    return this.httpClient.get<Proprety[]>(`http://localhost:8082/SpringMVC/Proprety/retrieve-PropretyByNom/${nom}`);
  }
}

