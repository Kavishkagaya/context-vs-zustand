import ProductCard from "./ProductCard";
import type { ProductType } from "../../types";
import { useProductStore } from "../../store/ProductStore";
import StorePriceTag from "../pricetag/StorePriceTag";
import { memo, useCallback } from "react";
import { useProductActions } from "../../hooks/useProductActions";

const StoreProductContainer:React.FC = () => {
    const products = useProductStore((state) => state.products);
    const addToCart = useProductActions().addToCart;

    const handleAddToCart = useCallback((id: number, quantity: number) => {
        addToCart(id, quantity);
    }, [addToCart]);

    return (
        <div className="grid">
            {Object.entries(products).map(([id, product]: [string, ProductType]) => {
                const currentProduct = useProductStore(state => state.products[Number(id)]);
                return (
                    <ProductCard key={id} product={currentProduct} addToCart={handleAddToCart} >
                        <StorePriceTag price={currentProduct.price} />
                    </ProductCard>
                );
            })}
        </div>
    );
}

export default StoreProductContainer;
