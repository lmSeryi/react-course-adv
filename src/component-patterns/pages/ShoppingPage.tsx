import { ProductButtons, ProductCard, ProductImage, ProductName } from 'component-patterns/components';
import { Product } from 'component-patterns/interfaces/Product';

const product: Product = {
  id: 1,
  name: 'Coffee Mug',
  price: 10.0,
  img: './coffee-mug.png',
};

export const ShoppingPage = () => (
  <div>
    <h1>Shopping</h1>
    <hr />
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    }}
    >
      <ProductCard product={product}>
        <ProductCard.Image />
        <ProductCard.Name />
        <ProductCard.Buttons />
      </ProductCard>

      <ProductCard product={product}>
        <ProductImage img={product.img} />
        <ProductName name={product.name} />
        <ProductButtons />
      </ProductCard>
    </div>
  </div>
);
