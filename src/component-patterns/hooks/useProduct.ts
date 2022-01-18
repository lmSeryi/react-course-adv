import { useState } from 'react';

export const useProduct = () => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (amount: number) => {
    setCounter(Math.max(counter + amount, 0));
  };

  return { counter, increaseBy };
};
