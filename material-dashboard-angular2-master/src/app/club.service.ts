import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Club } from './model/club';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(private httpClient: HttpClient) { }
  addClub(c : Club): Observable<Club> {
    return this.httpClient.post<Club>('http://localhost:8081/SpringMVC/Club/Add-Club',c);
  }

getClub(): Observable<Club[]> {
    return this.httpClient.get<Club[]>('http://localhost:8081/SpringMVC/Club/retrieve-Club');
  }
  deleteclub(idClub : number): Observable<any> {
    return this.httpClient.delete<Club>(`http://localhost:8081/SpringMVC/Club/removeClub/${idClub}`);
  }
}