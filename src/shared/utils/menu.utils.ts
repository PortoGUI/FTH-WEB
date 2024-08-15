import {RoutingUtils} from './routing/routing.utils';

export class MenuUtils {
  static Menu: IMenu[] = [
    {
      id: '1', icon: 'assessment', name: 'Dashboard', expanded: true,
      subItems: [
        {id: '1.1', name: 'Visão Geral', route: RoutingUtils.AppPaths.OVERVIEW},
      ],
    },
    {
      id: '2', icon: 'inventory', name: 'Estoque', expanded: true,
      subItems: [
        {id: '2.1', name: 'Produtos', route: RoutingUtils.AppPaths.PRODUCTS},
      ],
    },
    {id: '3', icon: 'people', name: 'Clientes', route: RoutingUtils.AppPaths.CLIENTS},
    {id: '4', icon: 'local_shipping', name: 'Fornecedores', route: RoutingUtils.AppPaths.SUPPLIERS},
    {
      id: '5', icon: 'swap_horiz', name: 'Movimentação', expanded: true,
      subItems: [
        {id: '5.1', name: 'Vendas', route: RoutingUtils.AppPaths.SALES},
        {id: '5.2', name: 'Devoluções', route: RoutingUtils.AppPaths.RETURNS},
        {id: '5.3', name: 'Troca', route: RoutingUtils.AppPaths.EXCHANGES},
        {id: '5.4', name: 'Notas Fiscais', route: RoutingUtils.AppPaths.INVOICES},
        {id: '5.5', name: 'Retira', route: RoutingUtils.AppPaths.PICKUP}
      ],
    },
    {id: '6', icon: 'description', name: 'Relatórios', route: RoutingUtils.AppPaths.REPORTS}
  ];
}

export interface IMenu {
  id: string;
  name: string;
  icon?: string;
  route?: string;
  expanded?: boolean;
  subItems?: IMenu[];
}
