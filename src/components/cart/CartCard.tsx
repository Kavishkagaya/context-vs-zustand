import { useEffect, useState } from "react";
import Counter from "../Counter";
import type { CartProduct } from "../../types";

interface CartCardProps {
    cartProduct: CartProduct;
    children: React.ReactNode;
    onRemove: (id: number) => void;
    onUpdate: (id: number, newCount: number) => void;
}

const CartCard: React.FC<CartCardProps> = ({ cartProduct, children, onRemove, onUpdate }) => {
    const [count, setCount] = useState(cartProduct.quantity);

    useEffect(() => {
        setCount(cartProduct.quantity);
    }, [cartProduct.quantity]);

    return (
        <div className="cart-item">
            <div className="flex align-center gap">
                <img src={cartProduct.image} alt={cartProduct.name} />
                <div>
                    <h3>{cartProduct.name}</h3>
                    <p className="product-price">{children}</p>
                    <Counter count={count} setCount={setCount} maxCount={cartProduct.quantity} />
                    <button onClick={() => onRemove(cartProduct.id)}>Remove</button>
                    <button onClick={() => onUpdate(cartProduct.id, count)} disabled={count === cartProduct.quantity}>Update</button>
                </div>
            </div>
        </div>
    );
}

export default CartCard;