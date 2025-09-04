import { memo, useEffect, useRef, useState } from "react";
import Counter from "../Counter";
import type { CartProductType } from "../../types";

interface CartCardProps {
    cartProduct: CartProductType;
    children: React.ReactNode;
    onRemove: (id: number) => void;
    onUpdate: (id: number, newCount: number) => void;
}

const CartCard: React.FC<CartCardProps> = ({ cartProduct, children, onRemove, onUpdate }) => {
    const [count, setCount] = useState(cartProduct.quantity);
    const renderCount = useRef(0);

    useEffect(() => {
        setCount(cartProduct.quantity);
    }, [cartProduct.quantity]);

    return (
        <div className="cart-card">
            <p className="render-count">{renderCount.current++}</p>
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

export default memo(CartCard);