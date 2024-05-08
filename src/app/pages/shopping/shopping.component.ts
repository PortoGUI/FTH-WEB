import {Component, OnDestroy} from '@angular/core';
import {BreadcrumbService} from '../../../shared/services/breadcrumb.service';

@Component({
  selector: 'fth-shopping',
  template: `
    <fth-page-layout>
      <fth-list></fth-list>
    </fth-page-layout>
  `,
  styles: [``]
})
export class ShoppingComponent implements OnDestroy {

  constructor(private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.setBreadcrumbs(['Minhas Compras']);
  }

  ngOnDestroy(): void {
    this.breadcrumbService.clearBreadcrumbs();
  }
}
