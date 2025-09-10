import { useProductContext } from "../contexts/ProductContext";
import ProductCard from "./ProductCard";
import type { ProductType } from "../../types";

const ProductContainer:React.FC = () => {
    const { products } = useProductContext();

    return (
        <div className="grid">
            {Object.entries(products).map(([id, product]: [string, ProductType]) => (
                <ProductCard id={Number(id)} key={id}  />
            ))}
        </div>
    );
}

export default ProductContainer;
