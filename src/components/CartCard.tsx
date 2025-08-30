import { useRef, useState, memo } from "react";
import Counter from "./Counter";
import type { Product } from "../types";
import { useProductContext } from "../contexts/productContext";

const CartCardComponent: React.FC<{ product: Product }> = ({ product }) => {
    const [count, setCount] = useState(product.stock);
    const productContext = useProductContext();
    const renderCount = useRef(0);

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
        if(change === 0) return;
        productContext.setProducts(
            (prevProducts) => prevProducts.map((item) => {
                if (item.id === product.id) {
                    return { ...item, stock: item.stock + change };
                }
                return item;
            })
        )
        productContext.setCart(
            (prevCart)=> prevCart.map((item) => {
                if (item.id === product.id) {
                    return { ...item, stock: count };
                }
                return item;
            })
        )
    }

    return (
        <div className="cart-card">
            <p className="render-count">{renderCount.current++}</p>
            <div className="flex align-center gap">
                <img src={product.image} alt={product.name} />
                <div>
                    <h3>{product.name}</h3>
                    <p className="product-price">{product.price}{product.currency}</p>
                    <Counter count={count} setCount={setCount} maxCount={product.stock} />
                    <button onClick={removeFromCart}>Remove</button>
                    <button onClick={() => updateCart(count)} disabled={count === product.stock}>Update</button>
                </div>
            </div>
        </div>
    );
}

const CartCard = memo(CartCardComponent);
export default CartCard;