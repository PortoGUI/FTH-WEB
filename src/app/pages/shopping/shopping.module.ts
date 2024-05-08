import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShoppingComponent} from './shopping.component';
import {PageLayoutModule} from '../../../shared/components/page-layout/page-layout.module';
import {RouterModule} from '@angular/router';
import {RoutingUtils} from '../../../shared/utils/routing/routing.utils';
import {ListComponent} from '../../../shared/components/list/list.component';


@NgModule({
  declarations: [
    ShoppingComponent
  ],
  imports: [
    CommonModule,
    PageLayoutModule,
    RouterModule.forChild(RoutingUtils.RouteConfigSimple(ShoppingComponent)),
    ListComponent,
  ]
})
export class ShoppingModule {
}
