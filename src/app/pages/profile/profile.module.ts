import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {PageLayoutModule} from '../../../shared/components/page-layout/page-layout.module';

import {RoutingUtils} from '../../../shared/utils/routing/routing.utils';

import {ProfileComponent} from './profile.component';
import {ImageSelectorComponent} from '../../../shared/components/image-selector/image-selector.component';
import {NzTabComponent, NzTabSetComponent} from 'ng-zorro-antd/tabs';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    PageLayoutModule,
    RouterModule.forChild(RoutingUtils.RouteConfigSimple(ProfileComponent)),
    ImageSelectorComponent,
    NzTabSetComponent,
    NzTabComponent,
  ],
})
export class ProfileModule {
}
