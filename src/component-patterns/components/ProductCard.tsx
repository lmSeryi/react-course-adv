import styles from 'component-patterns/styles/styles.module.css';
import { useProduct } from 'component-patterns/hooks/useProduct';
import { ProductContextProps, ProductProps } from 'component-patterns/interfaces/Product';
import { createContext } from 'react';

export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children, className, style, onChange, value }: ProductProps) => {
  const { counter, increaseBy } = useProduct({ onChange, product, value });

  return (
    <Provider value={{
      counter,
      increaseBy,
      product,
    }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
