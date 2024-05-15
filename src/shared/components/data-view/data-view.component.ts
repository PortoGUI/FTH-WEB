import {Component, Input} from '@angular/core';
import {NzTableComponent, NzThAddOnComponent} from 'ng-zorro-antd/table';
import {NgForOf, NgIf} from '@angular/common';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {NzIconDirective} from 'ng-zorro-antd/icon';

@Component({
  selector: 'fth-data-view',
  standalone: true,
  imports: [NzTableComponent, NgForOf, NzButtonComponent, NzIconDirective, NgIf, NzThAddOnComponent],
  template: `
    <ng-container *ngIf="columns.length">
      <nz-table #basicTable nzPaginationType="small" nzShowSizeChanger [nzData]="dataSource" [nzScroll]="{x: 'auto'}">
        <thead>
        <tr>
          <ng-container *ngFor="let column of columns">
            <th>{{ column.description }}</th>
          </ng-container>
          <ng-container *ngIf="basicTable.data.length">
            <th id="action-data-view"></th>
          </ng-container>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let data of basicTable.data">
          <ng-container *ngFor="let colData of columns">
            <td>{{ data[colData.fieldName] }}</td>
          </ng-container>
          <td>
            <ng-container *ngFor="let button of actions">
              <button nz-button nzType="text" (click)="button.action(data)">
                <span style="font-size: 1.3rem" nz-icon nzType="{{'ct:'+button.icon}}" [title]="button.name"></span>
              </button>
            </ng-container>
          </td>
        </tr>
        </tbody>
      </nz-table>
    </ng-container>
  `
})
export class DataViewComponent {
  @Input()
  columns: IDataViewColumn[] = [];

  @Input()
  dataSource: any[] = [];

  @Input()
  actions: IDataViewAction[] | undefined = [];
}

export interface IDataViewColumn {
  fieldName: string;
  description: string;
}

export interface IDataViewAction {
  type: dataViewActionType;
  action: Function;
  icon: string;
  name: string;
}

export enum dataViewActionType {
  edit,
  delete,
}
