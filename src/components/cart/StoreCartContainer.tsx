import type { CartProductType } from "../../types";
import CartCard from "./CartCard";
import { useProductStore } from "../../store/ProductStore";
import StorePriceTag from "../pricetag/StorePriceTag";
import { useProductActions } from "../../hooks/useProductActions";

const StoreCartContainer: React.FC = () => {
    const cart = useProductStore((state) => state.cart);
    const {removeFromCart, updateCart} = useProductActions();

    return (
        <div className="cart-container">
            {Object.entries(cart).map(([id, cartProduct]: [string, CartProductType]) => (
                <CartCard key={id} cartProduct={cartProduct} onRemove={removeFromCart} onUpdate={updateCart}>
                    <StorePriceTag price={cartProduct.price} />
                </CartCard>
            ))}
        </div>
    );
}

export default StoreCartContainer;
