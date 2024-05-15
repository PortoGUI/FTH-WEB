import {Component} from '@angular/core';

@Component({
  selector: 'fth-page-layout',
  template: `
    <div id="content">
      <ng-container *ngIf="false">
        <div id="filter-content">
          <nz-collapse nzExpandIconPosition="left" [nzBordered]="false">
            <nz-collapse-panel nzHeader="Filtros" [nzActive]="false" [nzDisabled]="false" [nzExtra]="IconTemplate">
              <p style="margin: 0">Filtros em desenvolvimento</p>
            </nz-collapse-panel>
          </nz-collapse>
          <ng-template #IconTemplate>
            <i class="material-icons" style="float: right">filter_alt</i>
          </ng-template>
        </div>
      </ng-container>
      <div id="page">
        <ng-content></ng-content>
      </div>
    </div>
    <div id="button-content">
      <div id="centered-buttons">
        <button nz-button nzType="primary">Salvar</button>
      </div>
    </div>
  `,
  styles: [`
    #filter-content {
      position: sticky;
      width: 100%;
      top: 0;
    }

    #content {
      height: calc(100% - 40px);
      overflow-y: auto;
    }

    #page {
      padding: 16px;
    }

    #button-content {
      position: sticky;
      width: 100%;
      height: 40px;
      bottom: 16px;
      padding: 0 16px;
    }

    #centered-buttons {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
    }

    #centered-buttons > button {
      margin-bottom: 1rem;
    }
  `],
})
export class PageLayoutComponent {

}
