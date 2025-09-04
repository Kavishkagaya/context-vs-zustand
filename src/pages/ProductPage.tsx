import ProductContainer from "../components/product/ContextProductContainer";
import CartContainer from "../components/cart/ContextCartContainer";
import { ProductContextProvider } from "../contexts/ProductContext";

const ProductPage: React.FC = () => {
  return (
    <ProductContextProvider>
      <div className="flex">
        <ProductContainer />
        <CartContainer />
      </div>
    </ProductContextProvider>
  );
};

export default ProductPage;
