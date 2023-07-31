import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    console.log('AuthGuard is triggered');
    if (this.loginService.isLoggedIn()) {
      console.log('User is authenticated');
      return true; // Allow access to the route
    } else {
      console.log('User is not authenticated. Redirecting to login...');
      // If not logged in, redirect to the login page and store the intended URL
      return this.router.createUrlTree(['/login'], {
        queryParams: { returnUrl: state.url }
      });
    }
  }
}