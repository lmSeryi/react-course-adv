import { CSSProperties, ReactElement } from 'react';

export interface Product {
  id: number;
  name: string;
  price: number;
  img?: string;
}

export interface ProductProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  style?: CSSProperties;
  className?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product
  className?: string;
  style?: CSSProperties;
}

export interface ProductNameProps {
  name? : string;
  className?: string;
  style?: CSSProperties;
}

export interface ProductImageProps{
  img?: string;
  className?: string;
  style?: CSSProperties;
}

export interface ProductButtonsProps {
  className?: string;
  style?: CSSProperties;
}

export interface ProductCardHocProps {
  (props: ProductProps): JSX.Element;
  Name: (props: ProductNameProps) => JSX.Element;
  Image: (props: ProductImageProps) => JSX.Element;
  Buttons: (props: ProductButtonsProps) => JSX.Element;
}
