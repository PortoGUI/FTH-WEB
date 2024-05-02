import {Component} from '@angular/core';
import {IMenu, MenuUtils} from '../../../../shared/utls/menu.utils';
import {Router} from '@angular/router';

@Component({
  selector: 'fth-private-comp',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent {

  protected navigationMenu: IMenu[];

  constructor(private router: Router) {
    this.navigationMenu = MenuUtils.Menu;
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}
