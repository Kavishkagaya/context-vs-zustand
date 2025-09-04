import { useProductContext } from "../../contexts/ProductContext";
import type { CartProduct } from "../../types";
import CartCard from "./CartCard";
import ContextPriceTag from "../pricetag/ContextPriceTag";

const CartContainer: React.FC = () => {
    const { cart, removeFromCart, updateCart } = useProductContext();

    return (
        <div className="cart-container">
            {cart.map((cartProduct: CartProduct) => (
                <CartCard key={cartProduct.id} cartProduct={cartProduct} onRemove={removeFromCart} onUpdate={updateCart}>
                    <ContextPriceTag price={cartProduct.price} />
                </CartCard>
            ))}
        </div>
    );
}

export default CartContainer;
