import { useProductStore } from "../store/store";
import CartCard from "./CartCard";

const CartContainer: React.FC = () => {
    const cart = useProductStore(state => state.cart);

    return (
        <div className="cart-container">
            {cart.map((product) => (
                <CartCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default CartContainer;
