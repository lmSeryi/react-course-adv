import styles from 'component-patterns/styles/styles.module.css';
import { useContext } from 'react';
import { ProductContext } from './ProductCard';

export const ProductButtons = () => {
  const context = useContext(ProductContext);
  const { increaseBy, counter } = context;
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}> - </button>
      <button className={styles.countLabel}>
        {counter}
      </button>
      <button className={styles.buttonAdd} onClick={() => increaseBy(1)}> + </button>
    </div>
  );
};
