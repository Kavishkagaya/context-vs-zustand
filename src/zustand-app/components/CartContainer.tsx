import type { CartProductType } from "../../types";
import CartCard from "./CartCard";
import { useProductStore } from "../store/ProductStore";

const CartContainer: React.FC = () => {
    const cart = useProductStore((state) => state.cart);

    return (
        <div className="cart-container">
            {Object.entries(cart).map(([id, cartProduct]: [string, CartProductType]) => (
                <CartCard id={Number(id)} key={id} />
            ))}
        </div>
    );
}

export default CartContainer;
