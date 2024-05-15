import {AfterViewInit, Component} from '@angular/core';
import {IMenu, MenuUtils} from '../../../../shared/utils/menu.utils';
import {Router} from '@angular/router';
import {RoutingUtils} from '../../../../shared/utils/routing/routing.utils';
import {ThemeService} from '../../../../theme/theme.service';
import {BreadcrumbService} from '../../../../shared/services/breadcrumb.service';
import {ScreenService, ScreenType} from '../../../../shared/services/screen.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'fth-private-comp',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements AfterViewInit {
  subscriber: Subscription;
  isCollapsed: boolean = false;
  selectedBreadCrumb: string[] | undefined;

  protected navigationMenu: IMenu[];

  constructor(private router: Router, private themeService: ThemeService, private breadCrumbService: BreadcrumbService, private screenService: ScreenService) {
    this.navigationMenu = MenuUtils.Menu;
    this.subscriber = this.screenService.screenChange.subscribe((type: ScreenType): boolean => this.isCollapsed = type === ScreenType.XS);
  }

  ngAfterViewInit(): void {
    this.breadCrumbService.breadcrumbs$.subscribe((crumbs: string[]): void => {
      setTimeout(() => this.selectedBreadCrumb = crumbs);
    });
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

  onSelectionChange(event: IMenu): void {
    this.router.navigate([event.route]);
  }

  isSelected(route: string | undefined): boolean {
    if (route) {
      return this.router.isActive(route, false);
    } else {
      return false;
    }
  }
}
