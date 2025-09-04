import { useProductContext } from "../../contexts/ProductContext";
import ProductCard from "./ProductCard";
import ContextPriceTag from "../pricetag/ContextPriceTag";
import type { ProductType } from "../../types";

const ContextProductContainer:React.FC = () => {
    const { products, addToCart } = useProductContext();

    return (
        <div className="grid">
            {Object.entries(products).map(([id, product]: [string, ProductType]) => (
                <ProductCard key={id} product={product} addToCart={addToCart} >
                    <ContextPriceTag price={product.price} />
                </ProductCard>
            ))}
        </div>
    );
}

export default ContextProductContainer;
