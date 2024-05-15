import {Component} from '@angular/core';

import {IChildCrudBase} from '../../../../shared/components/child-crud/child-crud.component';
import {ObjectState} from '../../../models/object-state.model';

@Component({
  selector: 'fth-address',
  template: `
    <fth-child-crud [childBase]="addressChildBase" [dataSource]="addresses" [(object)]="address" (handlerChange)="onHandlerChange()">
      <div class="ant-row">
        <div class="ant-col-24 ant-col-md-5">
          <input [(ngModel)]="address.zipcode" nz-input placeholder="CEP" type="text"/>
        </div>
        <div class="ant-col-24 ant-col-md-3">
          <input [(ngModel)]="address.state" nz-input placeholder="UF" type="text"/>
        </div>
        <div class="ant-col-24 ant-col-md-16">
          <input [(ngModel)]="address.city" nz-input placeholder="Cidade" type="text"/>
        </div>
        <div class="ant-col-24">
          <input [(ngModel)]="address.neighborhood" nz-input placeholder="Bairro" type="text"/>
        </div>
        <div class="ant-col-24 ant-col-md-20">
          <input [(ngModel)]="address.street" nz-input placeholder="Rua" type="text"/>
        </div>
        <div class="ant-col-24 ant-col-md-4">
          <input [(ngModel)]="address.number" nz-input placeholder="Número" type="text"/>
        </div>
        <div class="ant-col-24 ">
          <textarea [(ngModel)]="address.description" nz-input placeholder="Descrição"></textarea>
        </div>
      </div>
    </fth-child-crud>
  `,
})
export class AddressComponent {
  addressChildBase: IChildCrudBase;

  address: AddressModel = new AddressModel();

  addresses: AddressModel[] = [{key: 1, zipcode: '157000-08', state: 'SP', city: 'Jales', neighborhood: 'Centro', street: 'Rua Três', number: '2139', description: 'Casa laranja'}];

  constructor() {
    this.addressChildBase = {
      baseKey: 'key',
      columns: [
        {fieldName: 'zipcode', description: 'CEP'},
        {fieldName: 'state', description: 'UF'},
        {fieldName: 'city', description: 'Cidade'},
        {fieldName: 'neighborhood', description: 'Bairro'},
        {fieldName: 'street', description: 'Rua'},
        {fieldName: 'number', description: 'Número'},
        {fieldName: 'description', description: 'Descrição'},
      ],
    };
  }

  onHandlerChange(): void {
    this.address = new AddressModel();
  }
}

export class AddressModel extends ObjectState {
  key: number;
  zipcode: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  number: string;
  description: string;

  constructor() {
    super();
  }
}
