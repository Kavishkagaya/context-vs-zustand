import type { ProductType } from "../../types";
import Counter from "../Counter";
import { useRef, useState } from "react";

interface ProductCardProps {
    product: ProductType;
    children: React.ReactNode;
    addToCart: (id: number, quantity: number) => void;
}

const ProductCardComponent: React.FC<ProductCardProps> = ({ product, addToCart, children }) => {

    const [count, setCount] = useState<number>(0)
    const renderCount = useRef(0);

    const handleAddToCart = () => {
        addToCart(product.id, count);
        setCount(0); // Reset count after adding to cart
    };

    return (
        <div className="product-card">
            <p className="render-count">{renderCount.current++}</p>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="product-price">{children}</p>
            <span className="product-category">{product.category}</span>
            <span className={`product-stock ${product.stock === 0 ? 'danger' : ''}`}>{product.stock}</span>
            <Counter count={count} setCount={setCount} maxCount={product.stock} />
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
}

export default ProductCardComponent;
