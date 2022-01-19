import { ProductNameProps } from 'component-patterns/interfaces/Product';
import styles from 'component-patterns/styles/styles.module.css';
import { useContext } from 'react';
import { ProductContext } from './ProductCard';

export const ProductName = ({ name = '', className, style }: ProductNameProps) => {
  const { product } = useContext(ProductContext);
  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {name || product.name}
    </span>
  );
};
