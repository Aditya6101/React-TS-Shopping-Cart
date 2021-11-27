import React, { useContext, useEffect, useState } from "react";
import { getProducts } from "../../API";
// styles
import { Container, ProductCard, Rating } from "./Product.styles";
import { Button } from "../../App.styles";
// context
import { CartContext } from "../../context/CartContext";

const Product: React.FC = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <Container>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <h4>Price: ${product.price}</h4>
          <p>{product.description}</p>
          <Rating rating={product.rating.rate}>
            Rating: <span>{product.rating.rate}</span>
          </Rating>
          <Button
            type="button"
            onClick={() => addToCart(product)}
            isLarge={true}
            bg={"#111"}
          >
            Add to Cart
          </Button>
        </ProductCard>
      ))}
    </Container>
  );
};
export default Product;
