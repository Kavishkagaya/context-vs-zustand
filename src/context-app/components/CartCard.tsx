import { memo } from "react";
import CartCardComponent from "../../components/cart/CartCardComponent"
import { useProductContext } from "../contexts/ProductContext";
import PriceTag from "./PriceTag"

interface CartCardProps {
    id: number
}

const CartCard: React.FC<CartCardProps> = ({ id }) => {
    const { cart, removeFromCart, updateCart } = useProductContext();
    const cartProduct = cart[id];

    if (!cartProduct) return null;

    return (
        <CartCardComponent cartProduct={cartProduct} onRemove={removeFromCart} onUpdate={updateCart}>
            <PriceTag price={cartProduct.price} />
        </CartCardComponent>
    )
}

export default memo(CartCard);