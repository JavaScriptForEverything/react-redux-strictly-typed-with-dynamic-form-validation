// components/ProductListServerComponent.tsx
import { fetchProducts } from '../lib/api';

const ProductListServerComponent = async () => {
  const products = await fetchProducts();

  return (
    <div>
      {products.map((product: { id: number; title: string }) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};

export default ProductListServerComponent;
