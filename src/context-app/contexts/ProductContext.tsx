import { createContext, useState, useContext } from "react";
import type { CartProductType, ProductContextType } from "../../types";
import useFetchProducts from "../hooks/useFetchProducts";

const ProductContext = createContext<ProductContextType | undefined>(undefined);

const ProductContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const { products, setProducts } = useFetchProducts();
    const [cart, setCart] = useState<Record<number, CartProductType>>({});

    const addToCart = (id: number, quantity: number) => {
        const product = products[id];
        if (!product || quantity === 0) return;
        const stock = product.stock - quantity;
        setProducts(
            prevProducts => ({ ...prevProducts, [id]: { ...prevProducts[id], stock } })
        );
        setCart(
            prevCart => {
                const existingItem = prevCart[id];
                if (existingItem) {
                    return {
                        ...prevCart,
                        [id]: { ...prevCart[id], quantity: existingItem.quantity + quantity }
                    }
                }
                return {
                    ...prevCart,
                    [id]: { ...product, quantity: quantity }
                }
            }
        )
    }

    const removeFromCart = (id: number) => {
        const cartProduct = cart[id];
        if (!cartProduct) return;
        setProducts(
            (prevProducts) => ({ ...prevProducts, [id]: { ...prevProducts[id], stock: prevProducts[id].stock + cartProduct.quantity } })
        )
        setCart(
            (prevCart) => {
                const newCart = { ...prevCart };
                delete newCart[id];
                return newCart;
            }
        )
    }

    const updateCart = (id: number, quantity: number) => {
        const cartProduct = cart[id];
        if (!cartProduct) return;
        if (quantity === 0) return removeFromCart(id);
        const change = cartProduct.quantity - quantity;
        if(change === 0) return;
        setProducts(
            (prevProducts) => ({ ...prevProducts, [id]: { ...prevProducts[cartProduct.id], stock: prevProducts[cartProduct.id].stock + change } })
        )
        setCart(
            (prevCart)=> ({ ...prevCart, [id]: { ...prevCart[id], quantity: quantity } })
        )
    }

    return (
        <ProductContext.Provider value={{ products, cart, addToCart, removeFromCart, updateCart }}>
            {children}
        </ProductContext.Provider>
    );
};

const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProductContext must be used within a ProductContextProvider");
    }
    return context;
};

export { ProductContextProvider, useProductContext };
