import { lazy } from 'react';
import { Route } from 'interfaces/routes';
import NoLazy from '../lazyload/pages/NoLazy';

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */'lazyload/component/LazyLayout'));

export const routes: Route[] = [
  {
    path: '/lazy-1/*',
    to: '/lazy-1',
    Component: LazyLayout,
    name: 'Lazy-1',
  },
  {
    to: '/no-lazy',
    path: '/no-lazy',
    Component: NoLazy,
    name: 'No-lazy',
  },
];
