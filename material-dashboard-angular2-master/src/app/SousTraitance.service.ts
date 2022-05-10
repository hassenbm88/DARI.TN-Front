import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SousTraitance } from './model/sous-traitance';

@Injectable({
  providedIn: 'root'
})
export class SousTraitanceService {

  constructor(private httpClient: HttpClient) { }
  addSousTraitance(c : SousTraitance): Observable<SousTraitance> {
    return this.httpClient.post<SousTraitance>('http://localhost:8083/SpringMVC/Soustraitance/Add-SousTraitance',c);
  }
  removeSoustraitance(id_Traitance: number): Observable<SousTraitance> {
    return this.httpClient.delete<SousTraitance>('http://localhost:8083/SpringMVC/Soustraitance/removeSoustraitance/'+id_Traitance);
  }

  getAllSoustraitance(): Observable<SousTraitance[]> {
    return this.httpClient.get<SousTraitance[]>('http://localhost:8083/SpringMVC/Soustraitance/retrieve-Soustraitance');
  }
 
  getSoustraitance(id: number): Observable<SousTraitance> {
    return this.httpClient.get<SousTraitance>('http://localhost:8083/SpringMVC/Soustraitance/retrieve-Soustraitance/'+id);
  }

  updateSoustraitance(a: SousTraitance, id_traitance: number): Observable<SousTraitance>{
    return this.httpClient.put<SousTraitance>('http://localhost:8083/SpringMVC/Soustraitance/update-Soustraitance/'+id_traitance,a);
  }

  
}