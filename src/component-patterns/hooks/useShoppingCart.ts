import { OnChangeArgs, Product } from 'component-patterns/interfaces/Product';
import { useState } from 'react';

interface ProductInCart extends Product {
  count: number;
}

export const useShoppingCart = () => {
  const [cart, setCart] = useState<{ [key:string]: ProductInCart }>({});

  const onProductCountChange = ({ product, count }: OnChangeArgs) => {
    const productInCart: ProductInCart = cart[product.id] || { ...product, count: 0 };
    if (Math.max(productInCart.count + count, 0) > 0) {
      productInCart.count += count;
      setCart({ ...cart, [product.id]: productInCart });
      return;
    }
    const newCart = { ...cart };
    delete newCart[product.id];
    setCart(newCart);
  };

  return { cart, onProductCountChange };
};
