import { memo } from "react";
import CartCardComponent from "../../components/cart/CartCardComponent"
import PriceTag from "./PriceTag"
import { useFetchCart, useRemoveFromCart, useUpdateCart } from "../hooks/ProductQuery";

interface CartCardProps {
    id: number
}

const CartCard: React.FC<CartCardProps> = ({ id }) => {
    const { data: cart } = useFetchCart();
    const { mutate: removeFromCart } = useRemoveFromCart();
    const { mutate: updateCart } = useUpdateCart();

    const cartProduct = cart?.[id];
    if (!cartProduct) return null;

    const handleRemove = (id: number) => {
        removeFromCart({productId: id});
    }

    const handleUpdate = (productId: number, quantity: number) => {
        updateCart({productId, quantity});
    }

    return (
        <CartCardComponent cartProduct={cartProduct} onRemove={handleRemove} onUpdate={handleUpdate}>
            <PriceTag price={cartProduct.price} />
        </CartCardComponent>
    )
}

export default memo(CartCard);