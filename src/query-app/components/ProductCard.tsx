import { memo } from "react";
import PriceTag from "./PriceTag";
import ProductCardComponent from "../../components/product/ProductCardComponent";
import { useAddToCart, useFetchProducts } from "../hooks/ProductQuery";
import type { CartProductType } from "../../types";

const ProductCard: React.FC<{ id: number }> = ({ id }) => {
    const { data: products } = useFetchProducts();
    const { mutate: addToCart } = useAddToCart();

    const product = products?.[id];
    if (!product) return null;

    const handleAddToCart = (id:number, quantity:number) => {
        const cartProduct: CartProductType = {
            ...product,
            quantity
        };
        addToCart(cartProduct);
    }

    return (
        <ProductCardComponent product={product} addToCart={handleAddToCart}>
            <PriceTag price={product.price} />
        </ProductCardComponent>
    )
}

export default memo(ProductCard);