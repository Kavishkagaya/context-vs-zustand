import { useProductContext } from "../contexts/ProductContext";
import type { CartProductType } from "../../types";
import CartCard from "./CartCard";

const CartContainer: React.FC = () => {
    const { cart } = useProductContext();

    return (
        <div className="cart-container">
            {Object.entries(cart).map(([id, cartProduct]: [string, CartProductType]) => (
                <CartCard id={Number(id)} key={id} />
            ))}
        </div>
    );
}

export default CartContainer;
