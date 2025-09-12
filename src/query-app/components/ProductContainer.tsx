import ProductCard from "./ProductCard";
import type { ProductType } from "../../types";
import { useFetchProducts } from "../hooks/ProductQuery";

const ProductContainer: React.FC = () => {
    const { isError, isLoading, data } = useFetchProducts();

    const products: Record<number, ProductType> = data || {};
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading products.</div>;
    if (!data) return <div>No products available.</div>;

    return (
        <div className="grid">
            {Object.entries(products).map(([id, product]: [string, ProductType]) => (
                <ProductCard id={Number(id)} key={id} />
            ))}
        </div>
    );
}

export default ProductContainer;
