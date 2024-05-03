import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {NzIconService} from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SweetAlert2Module],
  template: `
    <router-outlet/>
  `,
})
export class AppComponent {

  customIcons: string[] = ['store', 'construction', 'dashboard', 'question_answer', 'shopping_cart', 'app_registration'];

  constructor(private iconService: NzIconService) {
    this.customIcons.forEach(icon => {
      this.iconService.addIconLiteral(`ct:${icon}`,
        `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                  <text x="7" y="7" text-anchor="middle" dominant-baseline="middle" class="material-icons" style="font-size: 12px;">${icon}</text>
                </svg>`
      );
    });
  }

}
