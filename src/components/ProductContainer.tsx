import { useProductStore } from "../store/store";
import ProductCard from "./ProductCard";

const ProductContainer:React.FC = () => {
    const products = useProductStore(state => state.products);

    return (
        <div className="grid">
            {Object.keys(products).map(productId => (
                <ProductCard key={productId} productId={Number(productId)} />
            ))}
        </div>
    );
}

export default ProductContainer;
