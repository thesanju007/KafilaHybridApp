import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TestService } from "../Services/test.service"
@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private authService: TestService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isLoggedIn !== true) {

      window.alert("Access Denied, Login is Required to Access This Page!");
      this.router.navigate(['/ccindex'])
      localStorage.clear();
      sessionStorage.clear();
      console.clear()

    }
    return true;
  }
}
  

