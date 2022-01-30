import { OnChangeArgs, Product } from 'component-patterns/interfaces/Product';
import { useEffect, useRef, useState } from 'react';

interface UseProductArgs {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
}

export const useProduct = ({ onChange, product, value = 0 }: UseProductArgs) => {
  const [counter, setCounter] = useState(value);
  const isControlled = useRef(!!onChange);

  useEffect(() => {
    setCounter(value);
  }, [value]);

  const increaseBy = (amount: number) => {
    if (isControlled.current && onChange) {
      onChange({ count: amount, product });
      return;
    }
    const newValue = Math.max(counter + amount, 0);
    setCounter(newValue);

    if (onChange) {
      onChange({ count: newValue, product });
    }
  };

  return { counter, increaseBy };
};
