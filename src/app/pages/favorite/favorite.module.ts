import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FavoriteComponent} from './favorite.component';
import {RouterModule} from '@angular/router';
import {RoutingUtils} from '../../../shared/utils/routing/routing.utils';
import {PageLayoutModule} from '../../../shared/components/page-layout/page-layout.module';
import {ListComponent} from '../../../shared/components/list/list.component';

@NgModule({
  declarations: [FavoriteComponent],
  imports: [
    CommonModule,
    PageLayoutModule,
    RouterModule.forChild(RoutingUtils.RouteConfigSimple(FavoriteComponent)),
    ListComponent,
  ]
})
export class FavoriteModule {
}
