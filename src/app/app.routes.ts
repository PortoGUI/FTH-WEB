import {Routes} from '@angular/router';
import {AuthGuardService} from '../shared/services/auth-guard.service';
import {PublicGuardService} from '../shared/services/public-guard.service';

export const routes: Routes = [
  {path: '', redirectTo: '/out', pathMatch: 'full'},
  {
    path: 'out', canActivate: [PublicGuardService],
    loadChildren: () => import('../app/layouts/public-routing/public-routing.module').then(m => m.PublicRoutingModule)
  },
  {
    path: 'in', canActivate: [AuthGuardService],
    loadChildren: () => import('../app/layouts/private-routing/private-routing.module').then(m => m.PrivateRoutingModule)
  },
  {path: '**', redirectTo: '/register'},

];
