import { memo, useState } from "react";
import dynamic from 'next/dynamic';

// import { AddProductToWishlist } from "./AddProductToWishlist";
import { AddProducToWishlistProps } from "./AddProductToWishlist";

const AddProductToWishlist = dynamic<AddProducToWishlistProps>(() => {
  return import('./AddProductToWishlist').then(mod => mod.AddProductToWishlist);
}, {
  loading: function loadingSpan() {
    return (
      <span>Loading...</span>
    )}
});

AddProductToWishlist.displayName = 'AddProductToWishlist';

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }
  onAddToWishlist: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishlist }: ProductItemProps) {
  const [isAddingToWishList, setIsAddingToWishlist] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>Add to wishlist</button>

      {isAddingToWishList && (
        <AddProductToWishlist
          onAddToWishList={() => onAddToWishlist(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      )}
    </div>
  );
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product);
});