import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PublicGuardService {
  constructor(private router: Router) {
  }

  canActivate(): boolean {
    const token = sessionStorage.getItem('token-access');
    if (token?.length) {
      this.router.navigate(['/in']);
      return false;
    } else {
      return true;
    }
  }
}

