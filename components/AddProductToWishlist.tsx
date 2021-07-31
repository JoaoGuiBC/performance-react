export interface AddProducToWishlistProps {
  onAddToWishList: () => void;
  onRequestClose: () => void;
}

export const AddProductToWishlist: React.FC<AddProducToWishlistProps> = ({
  onAddToWishList,
  onRequestClose
}) => {
  return (
    <span> 
      Want to add to favorites?
      <button onClick={onAddToWishList}>Yes</button>
      <button onClick={onRequestClose}>No</button>
    </span>
  );
}
