import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {dataViewActionType, DataViewComponent, IDataViewAction, IDataViewColumn} from '../data-view/data-view.component';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {NgIf} from '@angular/common';
import {GlobalUtils} from '../../utils/global-utils';

@Component({
  selector: 'fth-child-crud',
  standalone: true,
  imports: [DataViewComponent, NzButtonComponent, NzIconDirective, NgIf],
  template: `
    <ng-container *ngIf="!editMode">
      <div class="button-toolbar">
        <button nz-button nzType="primary" (click)="toggleMode()">
          Novo
        </button>
      </div>
    </ng-container>
    <ng-container *ngIf="!editMode;else FormTemplate">
      <fth-data-view [columns]="childBase.columns" [dataSource]="dataSource" [actions]="childBase.actions"></fth-data-view>
    </ng-container>
    <ng-template #FormTemplate>
      <ng-content></ng-content>
      <div class="buttons-container">
        <button nz-button nzType="primary" (click)="save()">
          Incluir
        </button>
        <button nz-button nzDanger nzType="default" (click)="toggleMode()">
          Descartar
        </button>
      </div>
    </ng-template>
  `,
  styles: [`
    .button-toolbar {
      width: 100%;
      margin-bottom: 1rem;
    }

    .buttons-container {
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
    }

    .button-toolbar button, .buttons-container button {
      margin: 0 0.5rem;
    }

  `]
})
export class ChildCrudComponent implements OnChanges {
  @Input()
  childBase: IChildCrudBase;

  @Input()
  dataSource: any[];

  @Input()
  object: any;

  @Output()
  objectChange: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  handlerChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  editMode: boolean = false;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['childBase']) {
      this.childBase.actions = [
        {name: 'Editar', icon: 'edit', type: dataViewActionType.edit, action: (event: any) => this.edit(event)},
        {name: 'Excluir', icon: 'delete_forever', type: dataViewActionType.delete, action: (event: any) => this.delete(event)},
      ];
    }
  }

  protected edit(event: any): void {
    this.toggleMode();
    this.object = structuredClone(event);
    this.objectChange.emit(this.object);
  }

  protected delete(event: any): void {
    if (GlobalUtils.isValid(event[this.childBase.baseKey])) {
      this.dataSource = this.dataSource.filter(data => data[this.childBase.baseKey] !== event[this.childBase.baseKey]);
    } else {
      this.dataSource = this.dataSource.filter(data => data._KEY_ !== event._KEY_);
    }
  }

  toggleMode(): void {
    this.editMode = !this.editMode;
    this.handlerChange.emit(this.editMode);
  }

  save(): void {
    const index: number = this.dataSource.findIndex(item =>
      GlobalUtils.isValid(item[this.childBase.baseKey]) ? item[this.childBase.baseKey] === this.object[this.childBase.baseKey] : item._KEY_ === this.object._KEY_
    );
    if (index !== -1) {
      this.dataSource.splice(index, 1);
    }
    this.dataSource.push(this.object);
    this.toggleMode();
  }
}

export interface IChildCrudBase {
  columns: IDataViewColumn[];
  actions?: IDataViewAction[];
  baseKey: string;
}
