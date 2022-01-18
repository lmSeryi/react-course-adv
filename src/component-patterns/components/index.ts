import { ProductCardHocProps } from 'component-patterns/interfaces/Product';
import { ProductCard as ProductCardHoc } from './ProductCard';
import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductName } from './ProductName';

export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductName } from './ProductName';

export const ProductCard : ProductCardHocProps = Object.assign(ProductCardHoc, {
  Name: ProductName,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
