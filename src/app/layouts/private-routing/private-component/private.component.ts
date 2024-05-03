import {Component} from '@angular/core';
import {IMenu, MenuUtils} from '../../../../shared/utils/menu.utils';
import {Router} from '@angular/router';
import {RoutingUtils} from '../../../../shared/utils/routing/routing.utils';
import {ThemeService} from '../../../../theme/theme.service';

@Component({
  selector: 'fth-private-comp',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent {

  protected navigationMenu: IMenu[];

  constructor(private router: Router, private themeService: ThemeService) {
    this.navigationMenu = MenuUtils.Menu;
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

  goToProfile(): void {
    this.router.navigate([RoutingUtils.AppPaths.PROFILE]);
  }

  gotoStart(): void {
    this.router.navigate(['/']);
  }

  changeTheme(): void {
    this.themeService.toggleTheme();
  }
}
