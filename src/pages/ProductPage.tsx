import ProductContainer from "../components/ProductContainer";
import CartContainer from "../components/CartContainer";
import { useProductStore } from "../store/store";

const ProductPage: React.FC = () => {
  const theme = useProductStore(state => state.theme);
  const toggleTheme = useProductStore(state => state.toggleTheme);

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
