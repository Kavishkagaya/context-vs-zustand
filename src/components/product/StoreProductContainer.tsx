import ProductCard from "./ProductCard";
import type { ProductType } from "../../types";
import { useProductStore } from "../../store/ProductStore";
import StorePriceTag from "../pricetag/StorePriceTag";
import { memo, useCallback } from "react";

const StoreProductContainer:React.FC = () => {
    const products = useProductStore((state) => state.products);
    const addToCart = useProductStore((state) => state.addToCart);

    const handleAddToCart = useCallback((id: number, quantity: number) => {
        addToCart(id, quantity);
    }, [addToCart]);

    const MemoPriceTag = memo(StorePriceTag);

    return (
        <div className="grid">
            {Object.entries(products).map(([id, product]: [string, ProductType]) => {
                const currentProduct = useProductStore(state => state.products[Number(id)]);
                return (
                    <ProductCard key={id} product={currentProduct} addToCart={handleAddToCart} >
                        <MemoPriceTag price={currentProduct.price} />
                    </ProductCard>
                );
            })}
        </div>
    );
}

export default StoreProductContainer;
