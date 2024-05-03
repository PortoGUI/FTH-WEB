import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile.component';
import {RouterModule} from '@angular/router';
import {RoutingUtils} from '../../../shared/utils/routing/routing.utils';
import {PageLayoutModule} from '../../../shared/components/page-layout/page-layout.module';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(RoutingUtils.RouteConfigSimple(ProfileComponent)),
    PageLayoutModule
  ],
})
export class ProfileModule {
}
