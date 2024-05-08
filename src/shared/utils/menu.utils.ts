import {RoutingUtils} from './routing/routing.utils';

export class MenuUtils {
  static Menu: IMenu[] = [
    {
      id: '1', icon: 'app_registration', name: 'Cadastros',
      subItems: [
        {id: '1.1', name: 'Produtos', route: RoutingUtils.AppPaths.PRODUCTS},
      ],
    },
    {
      id: '2', icon: 'store', name: 'Vendas',
      subItems: [
        {id: '2.1', name: 'Estoque', route: RoutingUtils.AppPaths.STORE},
        {id: '2.2', name: 'Relatórios', route: RoutingUtils.AppPaths.REPORT}
      ],
    },
    {id: '3', icon: 'shopping_bag', name: 'Minhas Compras', route: RoutingUtils.AppPaths.SHOPPING},
    {id: '4', icon: 'star', name: 'Favoritos', route: RoutingUtils.AppPaths.FAVORITE},
  ];
}

export interface IMenu {
  id: string;
  name: string;
  icon?: string;
  route?: string;
  subItems?: IMenu[];
}
