import {Component, OnDestroy} from '@angular/core';
import {BreadcrumbService} from '../../../shared/services/breadcrumb.service';
import {ScreenService, ScreenType} from '../../../shared/services/screen.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'fth-profile',
  template: `
    <fth-page-layout>
      <div>
        <div>
          <div [ngClass]="!breakpoint ? 'image-align-full' : 'image-align-auto'">
            <fth-image-selector></fth-image-selector>
          </div>
          <div [ngClass]="breakpoint ? 'form-align-auto' : 'form-align-full'">
            <nz-tabset>
              <nz-tab nzTitle="Dados pessoais">
                <div class="ant-row">
                  <div class="ant-col-24 ant-col-md-5">
                    <input nz-input placeholder="Data de nascimento" type="date"/>
                  </div>
                  <div class="ant-col-24 ant-col-md-19">
                    <input nz-input placeholder="Nome Completo" type="text"/>
                  </div>
                  <div class="ant-col-24 ant-col-md-8">
                    <input nz-input placeholder="Cadastro Pessoa Física" type="text"/>
                  </div>
                </div>
              </nz-tab>
              <nz-tab nzTitle="Segurança">
                <div class="ant-row">
                  <div class="ant-col-24 ant-col-md-6">
                    <input nz-input placeholder="Login" type="text"/>
                  </div>
                  <div class="ant-col-24 ant-col-md-6">
                    <input nz-input placeholder="Senha Atual" type="password"/>
                  </div>
                  <div class="ant-col-24 ant-col-md-6">
                    <input nz-input placeholder="Nova Senha" type="password"/>
                  </div>
                  <div class="ant-col-24 ant-col-md-6">
                    <input nz-input placeholder="Confirmar Senha" type="password"/>
                  </div>
                </div>
              </nz-tab>
            </nz-tabset>
          </div>
        </div>

        <div>
          <nz-tabset>
            <nz-tab nzTitle="Endereços">
              <fth-address></fth-address>
            </nz-tab>
          </nz-tabset>
        </div>
      </div>
    </fth-page-layout>
  `,
  styles: [`
    .image-align-auto {
      display: inline-block;
      justify-content: center;
      align-items: center;
      vertical-align: top
    }

    .image-align-full {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .form-align-auto {
      width: calc(100% - 230px);
      display: inline-block;
      vertical-align: top
    }

    .form-align-full {
      width: 100%;
    }
  `]
})
export class ProfileComponent implements OnDestroy {
  breakpoint: boolean = false;
  subscriber: Subscription;

  constructor(private breadcrumbService: BreadcrumbService, private screenService: ScreenService) {
    this.breadcrumbService.setBreadcrumbs(['Perfil']);
    this.subscriber = this.screenService.screenChange.subscribe((type: ScreenType): boolean => this.breakpoint = type >= ScreenType.LG);
  }

  ngOnDestroy(): void {
    this.breadcrumbService.clearBreadcrumbs();
  }
}
