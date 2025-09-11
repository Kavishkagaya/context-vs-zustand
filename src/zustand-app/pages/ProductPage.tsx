import { useEffect } from "react";
import CartContainer from "../components/CartContainer";
import ProductContainer from "../components/ProductContainer";
import { useProductActions } from "../hooks/useProductActions";

const ProductPage: React.FC = () => {
  const { loadProducts, loadCart } = useProductActions();
  
  useEffect(()=>{
    loadProducts();
    loadCart();
  }, [])

  return (
    <div className="container">
      <div className="flex">
        <ProductContainer />
        <CartContainer />
      </div>
    </div>
  );
};

export default ProductPage;
