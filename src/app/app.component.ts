import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SweetAlert2Module],
  template: `
    <router-outlet/>
  `,
  styles: [``]
})
export class AppComponent {
}
