export class MenuUtils {
  static Menu: IMenu[] = [
    {
      id: '1', icon: 'app_registration', name: 'Cadastros', open: true,
      subItems: [
        {id: '1.1', name: 'Produtos'},
      ],
    },
    {
      id: '2', icon: 'store', name: 'Vendas',
      subItems: [
        {id: '2.4', name: 'Estoque'}
      ],
    }
  ];
}

export interface IMenu {
  id: string;
  name: string;
  icon?: string;
  open?: boolean;
  subItems?: IMenu[];
}
