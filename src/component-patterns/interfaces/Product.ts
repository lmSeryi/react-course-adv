import { ReactElement } from 'react';

export interface Product {
  id: number;
  name: string;
  price: number;
  img?: string;
}

export interface ProductProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product
}

export interface ProductCardHocProps {
  ({ product, children }: ProductProps): JSX.Element;
  Name: ({ name }: { name?: string }) => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
  Buttons: () => JSX.Element;
}
