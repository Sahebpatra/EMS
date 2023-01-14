import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Services } from 'src/app/components/Auth/services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

constructor(private service:Services, private router: Router){}

  canActivate(){
    if(this.service.isLoggedIn()){
      return true;
    }
    else{
    this.router.navigate(['login'])
    return false;
    }
  }
}
