import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  

  getUser() {
    return this.httpClient.get('http://localhost:8085/SpringMVC/api/auth/getUsers');
  }
  deleteUser(id : Number): Observable<any> {
    return this.httpClient.delete<User>(`http://localhost:8085/SpringMVC/api/auth/deleteUser/${id}`);
  }
  getByProfession(profession:String) {
    return this.httpClient.get('http://localhost:8085/SpringMVC/api/auth/getUsersByProf/'+profession);
  }


  finfEventByName(Username: string): Observable<User[]> {
    return this.httpClient.get<User[]>(`http://localhost:8085/SpringMVC/api/auth/findUserbyName/${Username}`);
}

findEventByAgeL(age: number): Observable<User[]> {
  return this.httpClient.get<User[]>(`http://localhost:8085/SpringMVC/api/auth/findUserbyAgeLess/${age}`);
}
findEventByAgeG(age: number): Observable<User[]> {
  return this.httpClient.get<User[]>(`http://localhost:8085/SpringMVC/api/auth/findUserbyAgeMore/${age}`);
}
  
}