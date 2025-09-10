import { memo } from "react";
import CartCardComponent from "../../components/cart/CartCardComponent"
import PriceTag from "./PriceTag"
import { useProductStore } from "../store/ProductStore";
import { useProductActions } from "../hooks/useProductActions";

interface CartCardProps {
    id: number
}

const CartCard: React.FC<CartCardProps> = ({ id }) => {
    const cartProduct = useProductStore((state) => state.cart[id]);
    const { removeFromCart, updateCart } = useProductActions();

    if (!cartProduct) return null;

    return (
        <CartCardComponent cartProduct={cartProduct} onRemove={removeFromCart} onUpdate={updateCart}>
            <PriceTag price={cartProduct.price} />
        </CartCardComponent>
    )
}

export default memo(CartCard);