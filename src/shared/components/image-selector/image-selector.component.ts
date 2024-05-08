import {Component} from '@angular/core';
import {ImageCroppedEvent, ImageCropperComponent} from 'ngx-image-cropper';
import {AlertType, AlertUtils} from '../../utils/alert.utils';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {NzModalComponent, NzModalContentDirective, NzModalService} from 'ng-zorro-antd/modal';
import {NgIf} from '@angular/common';

@Component({
  selector: 'fth-image-selector',
  standalone: true,
  imports: [ImageCropperComponent, NzButtonComponent, NzModalComponent, NzModalContentDirective, NgIf],
  providers: [NzModalService],
  template: `
    <div class="preview">
      <img [src]="croppedImage.length? croppedImage : '../../../../assets/img/svg/profile_pic.svg'" alt="Preview da imagem Selecionada">
    </div>

    <div class="ant-row">
      <div class="ant-col-24 ant-col-md-12">
        <button class="image-button" nz-button nzType="default" nzDanger type="button" (click)="clearImage()">Limpar</button>
      </div>
      <div class="ant-col-24 ant-col-md-12">
        <button class="image-button" nz-button nzType="primary" type="button" (click)="fileInput.click()">Escolher</button>
      </div>
    </div>

    <nz-modal [(nzVisible)]="isVisible" nzTitle="Verificação de Imagem" [nzCancelText]="null" (nzOnOk)="handleOk()">
      <ng-container *nzModalContent>
        <div class="cropper-container">
          <image-cropper [imageChangedEvent]="imageChangedEvent" [maintainAspectRatio]="true" [aspectRatio]="1" [resizeToWidth]="400" (imageCropped)="imageCropped($event)"
                         (loadImageFailed)="loadImageFailed()">
          </image-cropper>
        </div>
      </ng-container>
    </nz-modal>
    <input type="file" #fileInput style="display: none" accept="image/jpeg, image/png" (change)="fileChangeEvent($event)">
  `,
  styleUrl: './image-selector.component.scss'
})
export class ImageSelectorComponent {
  croppedImage: any = '';
  imageChangedEvent: any = '';

  isVisible: boolean = false;

  imageCropped(event: ImageCroppedEvent): void {
    this.croppedImage = event.objectUrl;
  }

  loadImageFailed(): void {
    AlertUtils.Toast(AlertType.ERROR, 'Erro inesperado ao carregar imagem.');
  }

  fileChangeEvent(event: any): void {
    if (event.target.files && event.target.files.length) {
      this.isVisible = true;
      this.imageChangedEvent = event;
    }
  }

  clearImage(): void {
    this.imageChangedEvent = '';
    this.croppedImage = '';
  }

  handleOk(): void {
    this.isVisible = false;
  }
}
