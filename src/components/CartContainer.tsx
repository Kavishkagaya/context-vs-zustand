import { useProductContext } from "../contexts/productContext";

const CartContainer: React.FC = () => {
    const { cart } = useProductContext();

    return (
        <div>
            {cart.map((product) => (
                <div key={product.id}>{product.name}</div>
            ))}
        </div>
    );
}

export default CartContainer;
