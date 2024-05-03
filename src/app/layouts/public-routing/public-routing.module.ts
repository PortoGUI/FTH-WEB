import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PublicModule} from './public-component/public.module';

import {PublicComponent} from './public-component/public.component';

const routes: Routes = [
  {path: '', component: PublicComponent},
  {path: '**', redirectTo: '/out'},
];

@NgModule({
  imports: [RouterModule.forChild(routes), PublicModule],
  exports: [RouterModule],
})
export class PublicRoutingModule {
}
