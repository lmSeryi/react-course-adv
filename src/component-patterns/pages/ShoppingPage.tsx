import { ProductButtons, ProductCard, ProductImage, ProductName } from 'component-patterns/components';
import { useShoppingCart } from 'component-patterns/hooks/useShoppingCart';
import { products } from '../data/products';
import '../styles/custom-styles.css';

export const ShoppingPage = () => {
  const { cart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>Shopping</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
      >
        {products.map((product) => (
          <ProductCard
            className="bg-dark text-white"
            product={product}
            key={product.id}
            onChange={onProductCountChange}
            value={cart[product.id]?.count || 0}
          >
            <ProductImage />
            <ProductName />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.values(cart).map((value) => (
          <ProductCard
            key={value.id}
            product={value}
            className="bg-dark text-white"
            style={{ width: '100px' }}
            onChange={onProductCountChange}
            value={value.count}
          >
            <ProductImage className="custom-image" />
            <ProductButtons
              className="custom-buttons"
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
