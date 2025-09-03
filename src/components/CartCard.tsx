import * as React from "react";
import { useState, useRef } from "react";
import Counter from "./Counter";
import { useProductStore } from "../store/store";

const CartCardComponent: React.FC<{ productId: number }> = ({ productId }) => {
    const product = useProductStore(state => state.cart[productId]);
    const [count, setCount] = useState(product.stock);
    const removeFromCart = useProductStore(state => state.removeFromCart);
    const updateCart = useProductStore(state => state.updateCart);
    const renderCount = useRef(0);

    const handleUpdateCart = () => {
        if(count === 0) return removeFromCart(product);
        updateCart(product, count);
    }

    return (
        <div className={`cart-card ${product.isRemoving ? 'disabled' : ''}`}>
            <p className="render-count">{renderCount.current++}</p>
            <div className="flex align-center gap">
                <img src={product.image} alt={product.name} />
                <div>
                    <h3>{product.name}</h3>
                    <p className="product-price">{product.price}{product.currency}</p>
                    <Counter count={count} setCount={setCount} maxCount={product.stock} />
                    <button onClick={() => removeFromCart(product)}>Remove</button>
                    <button onClick={handleUpdateCart} disabled={count === product.stock}>Update</button>
                </div>
            </div>
        </div>
    );
}

const CartCard = React.memo(CartCardComponent);
export default CartCard;