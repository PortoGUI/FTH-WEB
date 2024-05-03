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
    {
      path: 'profile', loadChildren: () => import('../../../app/pages/profile/profile.module').then(m => m.ProfileModule),
    },
  ];

  static AppPaths: any = {
    PROFILE: 'in/profile'
  };
}
