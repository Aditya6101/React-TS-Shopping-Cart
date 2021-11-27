// Components
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
// Context Provider
import CartProvider from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Header />
        <Product />
      </CartProvider>
    </div>
  );
}

export default App;
