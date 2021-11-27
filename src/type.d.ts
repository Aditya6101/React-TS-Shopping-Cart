interface ProductItem {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating: ratingObj;
  amount: number;
}

interface ratingObj {
  rate: number;
  count: number;
}

// CartContext type
interface CartContext {
  cartItems: ProductItem[];
  addToCart: (product: ProductItem) => void;
  removeFromCart: (productId: number) => void;
}
