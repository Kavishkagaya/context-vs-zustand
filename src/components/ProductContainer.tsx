import { useProductContext } from "../contexts/productContext";
import ProductCard from "./ProductCard";

const ProductContainer:React.FC = () => {
    const { products } = useProductContext();

    return (
        <div className="grid">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductContainer;
