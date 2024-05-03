import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './page-layout.component';
import {NzCollapseComponent, NzCollapsePanelComponent} from 'ng-zorro-antd/collapse';



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
    NzCollapsePanelComponent
  ]
})
export class PageLayoutModule { }
