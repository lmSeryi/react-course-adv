import { Route } from 'interfaces/routes';
import { ShoppingPage } from 'component-patterns/pages/ShoppingPage';

export const routes: Route[] = [
  {
    path: '/*',
    to: '/',
    Component: ShoppingPage,
    name: 'Shopping',
  },
];
