import { useProductContext } from "../contexts/productContext";
import ProductContainer from "../components/ProductContainer";
import CartContainer from "../components/CartContainer";

const ProductPage: React.FC = () => {
  const { theme, toggleTheme } = useProductContext();

  return (
    <main className={theme}>
      <div className="container">
        <div className="flex justify-between">
          <h1>Products</h1>
          <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
        <div className="flex">
          <ProductContainer />
          <CartContainer />
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
