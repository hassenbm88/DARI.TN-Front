import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './_services/auth.service';
 
 
@Injectable()
export class AuthGuardService implements CanActivate {
 
    constructor(private router:Router, private authService: AuthService ) {
 
    }
    user = JSON.parse(localStorage.getItem('user'));
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        let isAuthorized = false;
        let token = localStorage.getItem('token');
    
        if(token==null || this.user.authorities[0].authority==null){
          window.alert("not login")  
          this.router.navigate(['/login'])
          return false;
        }
    
       /* route.data.Authority.forEach(role=>{
          if(this.user.appUserRole
            .includes(role)){
              isAuthorized = true;
          }
        })*/
        
        if(!isAuthorized){
          window.alert("not You don\'t have permission to view this page")  
          this.router.navigate(['/login'])
        }
        
        return isAuthorized;
      }

 
}