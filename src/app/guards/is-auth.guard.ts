import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthGuard implements CanActivate {

  token?:any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.token = localStorage.getItem('jwt');
      if (this.token == "") {
        console.log("ffffffff")
        console.log(this.authService.token)
        alert('You are already logged in!');
        this.router.navigate(['/']);
      }else{
        this.router.navigate(['/inter/profile']);
      }
      return false;

  }

}
