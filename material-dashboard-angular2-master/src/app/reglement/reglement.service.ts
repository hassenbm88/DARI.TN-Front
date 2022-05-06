import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Reglement} from './reglement';
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class ReglementService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {}

    public getReglements(): Observable<Reglement[]> {
        return this.http.get<Reglement[]>(`${this.apiServerUrl}/Reglement/retrieve-reglements`);
    }

    public addReglement(reglement: Reglement): Observable<Reglement> {
        return this.http.post<Reglement>(`${this.apiServerUrl}/Reglement/addReglement`, reglement);
    }

    public updateReglement(reglement: Reglement): Observable<Reglement> {
        return this.http.put<Reglement>(`${this.apiServerUrl}/Reglement/updateReglement`, reglement);
    }

    public deleteReglement(idReglement: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/Reglement/Reglement/${idReglement}`);
    }
}
