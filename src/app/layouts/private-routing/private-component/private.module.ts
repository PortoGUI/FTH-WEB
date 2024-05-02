import {NgModule} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';

import {NzDropDownDirective, NzDropdownMenuComponent} from 'ng-zorro-antd/dropdown';
import {NzBreadCrumbComponent, NzBreadCrumbItemComponent} from 'ng-zorro-antd/breadcrumb';
import {NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent} from 'ng-zorro-antd/menu';
import {NzContentComponent, NzHeaderComponent, NzLayoutComponent, NzSiderComponent} from 'ng-zorro-antd/layout';

import {PrivateComponent} from './private.component';

@NgModule({
  declarations: [PrivateComponent],
  imports: [
    CommonModule,
    RouterOutlet,
    NzMenuDirective,
    NzSiderComponent,
    NzLayoutComponent,
    NzHeaderComponent,
    NzSubMenuComponent,
    NzContentComponent,
    NzMenuItemComponent,
    NzDropDownDirective,
    NzBreadCrumbComponent,
    NzDropdownMenuComponent,
    NzBreadCrumbItemComponent
  ],
})
export class PrivateModule {
}
