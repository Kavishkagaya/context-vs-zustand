import type { Product } from "../../types";
import Counter from "../Counter";
import { useState } from "react";

interface ProductCardProps {
    product: Product;
    children: React.ReactNode;
    addToCart: (id: number, quantity: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart, children }) => {

    const [count, setCount] = useState<number>(0)

    const handleAddToCart = () => {
        addToCart(product.id, count);
        setCount(0); // Reset count after adding to cart
    };

    return (
        <div className="product-card">
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

export default ProductCard;
