import React from "react";
// components
import Cart from "../Cart/Cart";
// styles
import { HeaderContainer, Title } from "./Header.styles";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>Shopping Cart</Title>
      <Cart />
    </HeaderContainer>
  );
};

export default Header;
