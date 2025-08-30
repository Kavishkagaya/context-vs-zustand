import { useProductContext } from "../contexts/productContext";
import CartCard from "./CartCard";

const CartContainer: React.FC = () => {
    const { cart } = useProductContext();

    return (
        <div className="cart-container">
            {cart.map((product) => (
                <CartCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default CartContainer;
