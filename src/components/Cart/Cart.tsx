import React, { useState, useContext } from "react";
// context
import { CartContext } from "../../context/CartContext";
// styles
import {
  CartContainer,
  CartItemStyled,
  CartContent,
  TextWrapper,
  ButtonsWrapper,
} from "./Cart.styles";
import { Button } from "../../App.styles";
// icon
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";

const Cart: React.FC = () => {
  // stuff from context
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  // stats
  const [cartOpen, setCartOpen] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCartOpen((prev) => !prev);
  };

  const getTotal = (): number =>
    cartItems.reduce((ack: number, item) => ack + item.amount * +item.price, 0);

  return (
    <>
      {cartOpen ? (
        <button onClick={handleClick}>
          <CloseIcon />
        </button>
      ) : (
        <button onClick={handleClick}>
          <ShoppingCartIcon />
        </button>
      )}
      {cartOpen && (
        <CartContainer>
          <h4>
            {cartItems.length === 0
              ? "Your Cart is Empty"
              : `Total Cart Price: $${getTotal()}`}
          </h4>
          {cartItems.map((item) => (
            <CartItemStyled>
              <CartContent>
                <img src={item.image} alt={item.title} />
                <TextWrapper>
                  <h3>{item.title}</h3>
                  <h4>Price: ${item.price}</h4>
                  <p>{item.description}</p>
                </TextWrapper>
              </CartContent>
              <ButtonsWrapper>
                <Button
                  type="button"
                  isLarge={false}
                  bg={"#eee"}
                  onClick={() => addToCart(item)}
                >
                  +
                </Button>
                <span>{item.amount}</span>
                <Button
                  type="button"
                  isLarge={false}
                  bg={"#eee"}
                  onClick={() => removeFromCart(item.id)}
                >
                  -
                </Button>
              </ButtonsWrapper>
              <p>
                Total Price:{" "}
                <span>${(item.amount * +item.price).toFixed(2)}</span>
              </p>
            </CartItemStyled>
          ))}
        </CartContainer>
      )}
    </>
  );
};

export default Cart;
