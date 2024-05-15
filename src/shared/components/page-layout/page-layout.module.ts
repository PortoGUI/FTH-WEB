import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './page-layout.component';
import {NzCollapseComponent, NzCollapsePanelComponent} from 'ng-zorro-antd/collapse';
import {NzButtonComponent} from 'ng-zorro-antd/button';



@NgModule({
  declarations: [
    PageLayoutComponent
  ],
  exports: [
    PageLayoutComponent
  ],
  imports: [
    CommonModule,
    NzCollapseComponent,
    NzCollapsePanelComponent,
    NzButtonComponent
  ]
})
export class PageLayoutModule { }
