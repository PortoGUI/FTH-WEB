import {AfterViewInit, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {NzIconService} from 'ng-zorro-antd/icon';
import {ThemeService} from '../theme/theme.service';
import {NgIf} from '@angular/common';
import {ScreenService} from '../shared/services/screen.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SweetAlert2Module, NgIf],
  template: `
    <ng-container *ngIf="projectRead; else LoadingTemplate">
      <router-outlet/>
    </ng-container>

    <ng-template #LoadingTemplate>
      <div class="loader">
        <div class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </ng-template>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  projectRead: boolean = false;

  customIcons: string[] = [
    'store',
    'construction',
    'dashboard',
    'question_answer',
    'shopping_cart',
    'app_registration',
    'star',
    'shopping_bag',
    'edit',
    'delete_forever',
    'save',
    'delete',
    'add',
  ];

  constructor(private iconService: NzIconService, private themeService: ThemeService, private screenService: ScreenService) {
    this.customIcons.forEach(icon => {
      this.iconService.addIconLiteral(`ct:${icon}`,
        `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                  <text x="7" y="10" text-anchor="middle" dominant-baseline="middle" class="material-icons" style="font-size: 12px;">${icon}</text>
                </svg>`
      );
    });
    this.screenService.init();
  }

  ngAfterViewInit(): void {
    this.themeService.loadTheme();
    setTimeout((): void => {
      this.projectRead = true;
    }, 1000);
  }

}
