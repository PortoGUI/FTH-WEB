export class MenuUtils {
  static Menu: IMenu[] = [
    {
      id: '1', icon: 'dashboard', name: 'Dashboard', open: true,
      subItems: [
        {id: '1.1', name: 'Gráfico de Barras'},
        {id: '1.2', name: 'Gráfico de Pizza'},
        {id: '2.3', name: 'Relatório'}
      ],
    },
    {
      id: '2', icon: 'store', name: 'Vendas',
      subItems: [
        {id: '1.1', name: 'Vendas 2021'},
        {id: '1.2', name: 'Vendas 2022'},
        {id: '2.3', name: 'Vendas 2023'},
        {id: '2.4', name: 'Vendas 2024'}
      ],
    },
    {id: '3', icon: 'shopping_cart', name: 'Compras'},
    {id: '4', icon: 'construction', name: 'Em Breve'},
    {id: '5', icon: 'question_answer', name: 'Conversas'},
  ];
}

export interface IMenu {
  id: string;
  name: string;
  icon?: string;
  open?: boolean;
  subItems?: IMenu[];
}
