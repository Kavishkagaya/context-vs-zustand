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
            <span className="product-category">{product.category}</span>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div className="flex justify-between align-center mt-1 mb-1">
                <p className="product-stock">In stock : <span className={`${product.stock === 0 ? 'danger' : ''}`}>{product.stock}</span></p>
                <p className="product-price">{children}</p>
            </div>
            <div className="card-footer">
                <Counter count={count} setCount={setCount} maxCount={product.stock} />
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductCardComponent;
