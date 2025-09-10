import { memo } from "react";
import ProductCardComponent from "../../components/product/ProductCardComponent";
import { useProductContext } from "../contexts/ProductContext";
import PriceTag from "./PriceTag";

const ProductCard: React.FC<{ id: number }> = ({ id }) => {
    const { products, addToCart } = useProductContext();
    const product = products[id];

    if (!product) return null;

    return (
        <ProductCardComponent product={product} addToCart={addToCart}>
            <PriceTag price={product.price} />
        </ProductCardComponent>
    )
}

export default memo(ProductCard);