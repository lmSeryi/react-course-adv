import { LazyExoticComponent } from 'react';

type JsxComponent = () => JSX.Element;

export interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JsxComponent> | JsxComponent;
    name: string;
}
