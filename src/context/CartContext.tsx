import React, { useState, createContext } from "react";

export const CartContext = createContext<CartContext>({} as CartContext);

const CartProvider: React.FC = ({ children }) => {
  const [cartItems, setCartItems] = useState<ProductItem[]>([]);

  const addToCart = (clickedProduct: ProductItem) => {
    setCartItems((prev) => {
      const isProductInCart = prev.find(
        (product) => product.id === clickedProduct.id
      );
      if (isProductInCart) {
        return prev.map((product) =>
          product.id === clickedProduct.id
            ? { ...product, amount: product.amount + 1 }
            : product
        );
      } else {
        return [...prev, { ...clickedProduct, amount: 1 }];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as ProductItem[])
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
