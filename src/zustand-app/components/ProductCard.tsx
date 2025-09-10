import { memo } from "react";
import PriceTag from "./PriceTag";
import ProductCardComponent from "../../components/product/ProductCardComponent";
import { useProductStore } from "../../zustand-app/store/ProductStore";
import { useProductActions } from "../../zustand-app/hooks/useProductActions";

const ProductCard: React.FC<{ id: number }> = ({ id }) => {
    const product = useProductStore((state) => state.products[id]);
    const { addToCart } = useProductActions();

    if (!product) return null;

    return (
        <ProductCardComponent product={product} addToCart={addToCart}>
            <PriceTag price={product.price} />
        </ProductCardComponent>
    )
}

export default memo(ProductCard);