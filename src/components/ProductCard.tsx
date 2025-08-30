import { useProductStore } from "../store/store";
import type { Product } from "../types";
import Counter from "./Counter";
import { useRef, useState } from "react";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {

    const addToCart = useProductStore(state => state.addToCart);
    const [count, setCount] = useState<number>(0)

    const renderCount = useRef(0)

    const handleAddToCart = (product: Product, count: number) => {
        addToCart(product, count);
        setCount(0);
    }

    return (
        <div className="product-card">
            <p className="render-count">{renderCount.current++}</p>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="product-price">{product.price}{product.currency}</p>
            <span className="product-category">{product.category}</span>
            <span className={`product-stock ${product.stock === 0 ? 'danger' : ''}`}>{product.stock}</span>
            <Counter count={count} setCount={setCount} maxCount={product.stock} />
            <button onClick={() => handleAddToCart(product, count)}>Add to Cart</button>
        </div>
    );
}

export default ProductCard;
