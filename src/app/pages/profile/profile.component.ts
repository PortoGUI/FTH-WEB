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
                Dados
              </nz-tab>
              <nz-tab nzTitle="Segurança">
                login e senha
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
