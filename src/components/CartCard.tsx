import { useState } from "react";
import Counter from "./Counter";
import type { Product } from "../types";
import { useProductStore } from "../store/store";

const CartCard: React.FC<{ product: Product }> = ({ product }) => {
    const [count, setCount] = useState(product.stock);
    const removeFromCart = useProductStore(state => state.removeFromCart);
    const updateCart = useProductStore(state => state.updateCart);

    return (
        <div className="cart-item">
            <div className="flex align-center gap">
                <img src={product.image} alt={product.name} />
                <div>
                    <h3>{product.name}</h3>
                    <p className="product-price">{product.price}{product.currency}</p>
                    <Counter count={count} setCount={setCount} maxCount={product.stock} />
                    <button onClick={() => removeFromCart(product)}>Remove</button>
                    <button onClick={() => updateCart(product, count)} disabled={count === product.stock}>Update</button>
                </div>
            </div>
        </div>
    );
}

export default CartCard;