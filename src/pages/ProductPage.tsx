import ProductContainer from "../components/product/ContextProductContainer";
import CartContainer from "../components/cart/ContextCartContainer";
import { ProductContextProvider } from "../contexts/ProductContext";

const ProductPage: React.FC = () => {
  return (
    <ProductContextProvider>
      <div className="container">
        <div className="flex">
          <ProductContainer />
          <CartContainer />
        </div>
      </div>
    </ProductContextProvider>
  );
};

export default ProductPage;
