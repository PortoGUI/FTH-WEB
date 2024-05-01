import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(private router: Router) {
  }

  canActivate(): boolean {
    const token = sessionStorage.getItem('token-access');
    if (token?.length) {
      return true;
    } else {
      this.router.navigate(['/out']);
      return false;
    }
  }
}

