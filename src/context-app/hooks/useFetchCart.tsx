import { useEffect, useState } from "react";
import { getCart } from "../../api/cartApi";
import type { CartProductType } from "../../types";

const useFetchCart = () => {
    const [cart, setCart] = useState<Record<number, CartProductType>>({});

    useEffect(() => {
        const fetchCart = async () => {
            try{
                const products = await getCart();
                setCart(products);
            } catch (error) {
                console.error("Error fetching cart:", error);
            }
        };
        fetchCart();
    }, []);

    return { cart, setCart };
};

export default useFetchCart;
