import ProductCard from "./ProductCard";
import type { ProductType } from "../../types";
import { useProductStore } from "../../store/ProductStore";
import StorePriceTag from "../pricetag/StorePriceTag";
import { memo } from "react";
import { useProductActions } from "../../hooks/useProductActions";

const MemoPriceTag = memo(StorePriceTag);

const StoreProductContainer:React.FC = () => {
    const products = useProductStore((state) => state.products);
    const addToCart = useProductActions().addToCart;


    console.log("container rerenders");

    return (
        <div className="grid">
            {Object.entries(products).map(([id, product]: [string, ProductType]) => {
                const currentProduct = useProductStore(state => state.products[Number(id)]);
                return (
                    <ProductCard key={id} product={currentProduct} addToCart={addToCart} >
                        <MemoPriceTag price={currentProduct.price} />
                    </ProductCard>
                );
            })}
        </div>
    );
}

export default StoreProductContainer;
