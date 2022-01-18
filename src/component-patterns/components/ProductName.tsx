import styles from 'component-patterns/styles/styles.module.css';
import { useContext } from 'react';
import { ProductContext } from './ProductCard';

export const ProductName = ({ name = '' }) => {
  const { product } = useContext(ProductContext);
  return <span className={styles.productDescription}>{name || product.name}</span>;
};
