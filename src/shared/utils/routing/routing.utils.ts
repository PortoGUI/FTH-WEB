import {Route} from '@angular/router';

export class RoutingUtils {
  static RouteConfigSimple(component: any): Route[] {
    return [
      {path: '', component: component},
    ];
  }

  static RouteConfig(component: any): Route[] {
    return [
      {path: '', component},
      {path: 'form', component},
      {path: 'form/:id', component}
    ];
  }

  static Routes: Route[] = [
    {path: 'profile', loadChildren: () => import('../../../app/pages/profile/profile.module').then(m => m.ProfileModule)},

    {path: 'shopping', loadChildren: () => import('../../../app/pages/shopping/shopping.module').then(m => m.ShoppingModule)},
    {path: 'favorite', loadChildren: () => import('../../../app/pages/favorite/favorite.module').then(m => m.FavoriteModule)},
  ];

  static AppPaths: any = {
    PROFILE: 'in/profile',
    PRODUCTS: 'in/register/products',
    STORE: 'in/sales/store',
    REPORT: 'in/sales/report',
    SHOPPING: 'in/shopping',
    FAVORITE: 'in/favorite',
  };
}
