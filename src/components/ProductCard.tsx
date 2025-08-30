import type { Product } from "../types";
import { useProductContext } from "../contexts/productContext";
import Counter from "./Counter";
import { useRef, useState, memo } from "react";

const ProductCardComponent: React.FC<{ product: Product }> = ({ product }) => {

    const productContext = useProductContext();
    const [count, setCount] = useState<number>(0)

    const renderCount = useRef(0)

    const addToCart = (product: Product, count: number) => {
        if (count === 0) return;
        const stock = product.stock - count;
        productContext.setProducts(
            prevProducts => 
                prevProducts.map(
                    p => 
                        p.id === product.id ? 
                    { ...p, stock } : p
                )
        );
        productContext.setCart(
            prevCart => [
                ...prevCart,
                { ...product, stock: count }
            ]
        )
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
            <button onClick={() => addToCart(product, count)}>Add to Cart</button>
        </div>
    );
}

const ProductCard = memo(ProductCardComponent);
export default ProductCard;
