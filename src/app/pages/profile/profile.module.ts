import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {NzTabComponent, NzTabSetComponent} from 'ng-zorro-antd/tabs';

import {PageLayoutModule} from '../../../shared/components/page-layout/page-layout.module';

import {RoutingUtils} from '../../../shared/utils/routing/routing.utils';

import {ProfileComponent} from './profile.component';
import {ChildCrudComponent} from '../../../shared/components/child-crud/child-crud.component';
import {ImageSelectorComponent} from '../../../shared/components/image-selector/image-selector.component';
import {NzInputDirective} from 'ng-zorro-antd/input';
import {FormsModule} from '@angular/forms';
import { AddressComponent } from './address/address.component';

@NgModule({
  declarations: [
    ProfileComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
    NzTabComponent,
    PageLayoutModule,
    NzTabSetComponent,
    ChildCrudComponent,
    ImageSelectorComponent,
    RouterModule.forChild(RoutingUtils.RouteConfigSimple(ProfileComponent)),
    NzInputDirective,
    FormsModule,
  ],
})
export class ProfileModule {
}
