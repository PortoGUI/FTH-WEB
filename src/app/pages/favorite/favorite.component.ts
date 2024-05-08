import {Component, OnDestroy} from '@angular/core';
import {BreadcrumbService} from '../../../shared/services/breadcrumb.service';

@Component({
  selector: 'fth-favorite',
  template: `
    <fth-page-layout>
      <fth-list></fth-list>
    </fth-page-layout>
  `,
  styles: [``]
})
export class FavoriteComponent implements OnDestroy {

  data: any[] = [];

  constructor(private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.setBreadcrumbs(['Favoritos']);
  }

  ngOnDestroy(): void {
    this.breadcrumbService.clearBreadcrumbs();
  }
}
