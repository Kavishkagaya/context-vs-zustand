import CartContainer from "../components/CartContainer";
import ProductContainer from "../components/ProductContainer";


const ProductPage: React.FC = () => {
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
