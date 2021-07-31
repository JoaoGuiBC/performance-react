interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  }
}

const ProductItem: React.FC<ProductItemProps> = ({product}) => {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  );
}

export default ProductItem;