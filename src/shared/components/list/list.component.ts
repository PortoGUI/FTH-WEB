import {Component} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {NzListComponent, NzListEmptyComponent, NzListItemComponent, NzListItemMetaComponent} from 'ng-zorro-antd/list';

@Component({
  selector: 'fth-list',
  standalone: true,
  imports: [NgForOf, NgIf, NzListComponent, NzListEmptyComponent, NzListItemComponent, NzListItemMetaComponent],
  template: `
    <nz-list nzItemLayout="horizontal" [nzLoading]="false">
      <ng-container *ngFor="let item of data">
        <nz-list-item>
          <nz-list-item-meta
            nzAvatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            nzDescription="Ant Design, a design language for background applications, is refined by Ant UED Team"
            nzTitle="{{item.title}}">
          </nz-list-item-meta>
        </nz-list-item>
      </ng-container>
      <ng-container *ngIf="data.length === 0">
        <nz-list-empty/>
      </ng-container>
    </nz-list>
  `
})
export class ListComponent {

  data: IListData[] = [];
}

interface IListData {
  avatar: string;
  description: string;
  title: string;
}
