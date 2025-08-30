import { useState } from "react";
import Counter from "./Counter";
import type { Product } from "../types";
import { useProductContext } from "../contexts/productContext";

const CartCard: React.FC<{ product: Product }> = ({ product }) => {
    const [count, setCount] = useState(product.stock);
    const productContext = useProductContext();

    const removeFromCart = () => {
        productContext.setProducts(
            (prevProducts) => prevProducts.map((item) => {
                if (item.id === product.id) {
                    return { ...item, stock: item.stock + count };
                }
                return item;
            })
        )
        productContext.setCart(
            (prevCart) => prevCart.filter((item) => item.id !== product.id)
        )
    }

    const updateCart = (count: number) => {
        if (count === 0) removeFromCart();
        const change = product.stock - count;
        productContext.setProducts(
            (prevProducts) => prevProducts.map((item) => {
                if (item.id === product.id) {
                    return { ...item, stock: item.stock + change };
                }
                return item;
            })
        )
    }

    return (
        <div className="cart-item">
            <div className="flex align-center gap">
                <img src={product.image} alt={product.name} />
                <div>
                    <h3>{product.name}</h3>
                    <p className="product-price">{product.price}{product.currency}</p>
                    <Counter count={count} setCount={setCount} maxCount={product.stock} />
                </div>
            </div>
            <button onClick={removeFromCart}>Remove</button>
            <button onClick={() => updateCart(count)}>Update</button>
        </div>
    );
}

export default CartCard;