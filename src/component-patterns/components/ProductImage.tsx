import styles from 'component-patterns/styles/styles.module.css';
import noImage from 'component-patterns/assets/no-image.jpg';
import { useContext } from 'react';
import { ProductImageProps } from 'component-patterns/interfaces/Product';
import { ProductContext } from './ProductCard';

export const ProductImage = ({ img = '', className, style } : ProductImageProps) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;

  if (img) imgToShow = img;
  else if (product.img) imgToShow = product.img;
  else imgToShow = noImage;

  return <img className={`${styles.productImg} ${className}`} style={style} src={imgToShow} alt="Product" />;
};
