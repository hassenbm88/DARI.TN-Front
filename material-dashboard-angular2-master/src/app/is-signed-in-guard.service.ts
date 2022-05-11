import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsSignedInGuard implements CanActivate {
  
  constructor(private router:Router) { }

  user = JSON.parse(localStorage.getItem('user'));
  token = localStorage.getItem('token');
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(this.token==null || this.user.Authority==""){
      return false;
    }else{
        return true;
    }
  }
  
}