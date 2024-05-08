import {Component, OnDestroy} from '@angular/core';
import {BreadcrumbService} from '../../../shared/services/breadcrumb.service';

@Component({
  selector: 'fth-profile',
  template: `
    <fth-page-layout>
      <div class="ant-row">
        <div class="ant-col-24 ant-col-md-10">
          <h4>Imagem de Perfil</h4>
          <div class="image-align">
            <fth-image-selector></fth-image-selector>
          </div>
        </div>
        <div class="ant-col-24 ant-col-md-14">
          Dados pessoais
        </div>
        <div class="ant-col-24">
          <nz-tabset>
            <nz-tab nzTitle="Endereço">
              Dados
            </nz-tab>
          </nz-tabset>
        </div>
      </div>
    </fth-page-layout>
  `,
  styles: [`
    .image-align {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `]
})
export class ProfileComponent implements OnDestroy {

  constructor(private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.setBreadcrumbs(['Perfil']);
  }


  ngOnDestroy(): void {
    this.breadcrumbService.clearBreadcrumbs();
  }
}
