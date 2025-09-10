import ProductCard from "./ProductCard";
import type { ProductType } from "../../types";
import { useProductStore } from "../store/ProductStore";

const ProductContainer: React.FC = () => {
    const products = useProductStore((state) => state.products);

    return (
        <div className="grid">
            {Object.entries(products).map(([id, product]: [string, ProductType]) => (
                <ProductCard id={Number(id)} key={id} />
            ))}
        </div>
    );
}

export default ProductContainer;
