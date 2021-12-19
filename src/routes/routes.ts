import { lazy } from 'react';
import { Route } from 'interfaces/routes';

const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1"  */'lazyload/pages/LazyPage1'));
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2"  */'lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3"  */'lazyload/pages/LazyPage3'));

export const routes: Route[] = [
  {
    to: '/lazy-1',
    path: 'lazy-1',
    Component: Lazy1,
    name: 'Lazy-1',
  },
  {
    to: '/lazy-2',
    path: 'lazy-2',
    Component: Lazy2,
    name: 'Lazy-2',
  },
  {
    to: '/lazy-3',
    path: 'lazy-3',
    Component: Lazy3,
    name: 'Lazy-3',
  },
];
