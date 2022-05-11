import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';

const AUTH_API = 'http://localhost:8085/SpringMVC/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  private isloggedIn: boolean;
  private userName:string;

  constructor(private http: HttpClient) { }
  login(username: string, password: string): Observable<any> {
    const data= this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
    console.log(data)
    return data
  }
  register(username: string, email: string, password: string, age: string): Observable<any> {
    return this.http.post('http://localhost:8085/SpringMVC/api/v1/registration', {
      username,
      email,
      password,
      age 
      
    }, httpOptions);
    
    

  }  

  SecondRegister(  token: string,age: number, profession: String  ): Observable<any> {
    return this.http.post('http://localhost:8085/SpringMVC/api/auth/secondRegister', {
      token,
      age , 
      profession
      
    }, httpOptions);
    
    

  }







isUserLoggedIn(): boolean {
    return this.isloggedIn;
}

isAdminUser():boolean {
    if (this.userName=='Admin') {
        return true; 
    }
    return false;
}

logoutUser(): void{
    this.isloggedIn = false;
}
confirm(model: any) {
  return this.http.post( 'http://localhost:8085/SpringMVC/api/v1/registration/confirm?token=', +Token);
 
}




}