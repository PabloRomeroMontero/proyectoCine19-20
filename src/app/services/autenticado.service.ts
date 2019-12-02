import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './angular-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticadoService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot): Observable<boolean> {
    if (this.auth.loggedIn) {
      return this.auth.isAuthenticated$;
    } else {
      this.router.navigate(['/noAuth']);
      return this.auth.isAuthenticated$;
    }
  }
}
