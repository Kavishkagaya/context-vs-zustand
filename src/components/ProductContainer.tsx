import { useProductStore } from "../store/store";
import ProductCard from "./ProductCard";

const ProductContainer:React.FC = () => {
    const products = useProductStore(state => state.products);

    return (
        <div className="grid">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductContainer;
