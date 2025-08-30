import { useProductStore } from "../store/store";
import CartCard from "./CartCard";

const CartContainer: React.FC = () => {
    const cart = useProductStore(state => state.cart);

    return (
        <div className="cart-container">
            {Object.keys(cart).map((productId) => (
                <CartCard key={productId} productId={Number(productId)} />
            ))}
        </div>
    );
}

export default CartContainer;
