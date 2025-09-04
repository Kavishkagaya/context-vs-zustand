import { useProductContext } from "../../contexts/ProductContext";
import type { CartProductType } from "../../types";
import CartCard from "./CartCard";
import ContextPriceTag from "../pricetag/ContextPriceTag";

const CartContainer: React.FC = () => {
    const { cart, removeFromCart, updateCart } = useProductContext();

    return (
        <div className="cart-container">
            {Object.entries(cart).map(([id, cartProduct]: [string, CartProductType]) => (
                <CartCard key={id} cartProduct={cartProduct} onRemove={removeFromCart} onUpdate={updateCart}>
                    <ContextPriceTag price={cartProduct.price} />
                </CartCard>
            ))}
        </div>
    );
}

export default CartContainer;
