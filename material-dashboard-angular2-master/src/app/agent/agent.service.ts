import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Agent} from './agent';
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class AgentService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {}

    public getAgents(): Observable<Agent[]> {
        return this.http.get<Agent[]>(`${this.apiServerUrl}/agent/retrieve-Agents`);
    }

    public addAgent(agent: Agent): Observable<Agent> {
        return this.http.post<Agent>(`${this.apiServerUrl}/agent/addAgent`, agent);
    }

    public updateAgent(agent: Agent): Observable<Agent> {
        return this.http.put<Agent>(`${this.apiServerUrl}/agent/updateAgent`, agent);
    }

    public deleteAgent(idAgent: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/agent/deleteAgent/${idAgent}`);
    }
}
