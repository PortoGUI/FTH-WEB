import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrivateComponent} from './private.component';
import {NotFoundComponent} from '../../../shared/pages/not-found.component';

const routes: Routes = [
  { path: '', component: PrivateComponent,
    // children: [{path: '', loadChildren: () => import('../path').then(m => m.Module)}],
  },
  {
    path: '**', component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
