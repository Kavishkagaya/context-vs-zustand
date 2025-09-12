import type { CartProductType } from "../../types";
import { useFetchCart } from "../hooks/ProductQuery";
import CartCard from "./CartCard";

const CartContainer: React.FC = () => {
    const {isError, isLoading, data} = useFetchCart();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading cart.</div>;
    if (!data) return <div>No items in cart.</div>;

    const cart: Record<number, CartProductType> = data;

    return (
        <div className="cart-container">
            {Object.entries(cart).map(([id, cartProduct]: [string, CartProductType]) => (
                <CartCard id={Number(id)} key={id} />
            ))}
        </div>
    );
}

export default CartContainer;
