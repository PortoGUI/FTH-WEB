import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {NzCardComponent} from 'ng-zorro-antd/card';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {NzSwitchComponent} from 'ng-zorro-antd/switch';
import {NzCheckboxComponent} from 'ng-zorro-antd/checkbox';
import {NzColDirective, NzRowDirective} from 'ng-zorro-antd/grid';
import {NzInputDirective, NzInputGroupComponent} from 'ng-zorro-antd/input';
import {NzFormControlComponent, NzFormDirective, NzFormItemComponent} from 'ng-zorro-antd/form';

import {PublicComponent} from './public.component';


@NgModule({
  declarations: [PublicComponent],
  imports: [
    FormsModule,
    CommonModule,
    NzColDirective,
    NzRowDirective,
    NzCardComponent,
    NzFormDirective,
    NzInputDirective,
    NzButtonComponent,
    NzSwitchComponent,
    NzCheckboxComponent,
    NzFormItemComponent,
    ReactiveFormsModule,
    NzInputGroupComponent,
    NzFormControlComponent,
  ],
})

export class PublicComponentModule {
}
