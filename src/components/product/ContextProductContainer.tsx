import { useProductContext } from "../../contexts/ProductContext";
import ProductCard from "./ProductCard";
import ContextPriceTag from "../pricetag/ContextPriceTag";

const ProductContainer:React.FC = () => {
    const { products, addToCart } = useProductContext();

    return (
        <div className="grid">
            {products.map(product => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} >
                    <ContextPriceTag price={product.price} />
                </ProductCard>
            ))}
        </div>
    );
}

export default ProductContainer;
