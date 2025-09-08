import ContextProductContainer from "../components/product/ContextProductContainer";
import ContextCartContainer from "../components/cart/ContextCartContainer";
import StoreProductContainer from "../components/product/StoreProductContainer";
import StoreCartContainer from "../components/cart/StoreCartContainer";

interface ProductPageProps {
  mode: "context" | "zustand";
}

const ProductPage: React.FC<ProductPageProps> = ({mode}) => {
  if (mode === 'context') {
    return (
      <div className="container">
        <div className="flex">
          <ContextProductContainer />
          <ContextCartContainer />
        </div>
      </div>
    );
  }
  if (mode === 'zustand') {
    console.log("page rerenders");
    return (
      <div className="container">
        <div className="flex">
          <StoreProductContainer />
          <StoreCartContainer />
        </div>
      </div>
    );
  }
};

export default ProductPage;
