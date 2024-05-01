import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PublicComponentModule} from './public-component/public.module';

import {PublicComponent} from './public-component/public.component';

const routes: Routes = [
  {path: '', component: PublicComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes), PublicComponentModule],
  exports: [RouterModule],
})
export class PublicRoutingModule {
}
