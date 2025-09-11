import { createContext, useContext, useState } from "react";
import type { CartProductType, ProductContextType } from "../../types";
import useFetchProducts from "../hooks/useFetchProducts";
import useFetchCart from "../hooks/useFetchCart";
import { updateProductStock } from "../../api/productApi";
import { addToCart as addToCartApi, updateCart as updateCartApi, removeFromCart as removeFromCartApi } from "../../api/cartApi";

const ProductContext = createContext<ProductContextType | undefined>(undefined);

const ProductContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { products, setProducts } = useFetchProducts();
    const { cart, setCart } = useFetchCart();

    const [isLoading, setIsLoading] = useState(false);

    const addToCart = async (id: number, quantity: number) => {
        setIsLoading(true);
        const product = products[id];
        if (!product || quantity === 0) return;
        const stock = product.stock - quantity;

        const prevProducts = products;
        const prevCart = cart;

        // emulate added cart item
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

        // send request to add to cart api
        try {
            const newCartItem: CartProductType = { ...product, quantity };
            await Promise.all([
                updateProductStock(id, stock),
                addToCartApi(newCartItem)
            ]);
        } catch (error) {
            // rollback to previous state if error occurs
            setProducts(prevProducts);
            setCart(prevCart);
            console.error("Failed to add to cart:", error);
        }
        finally {
            setIsLoading(false);
        }
    }

    const removeFromCart = async (id: number) => {
        setIsLoading(true);

        const prevProducts = products;
        const prevCart = cart;

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

        // send request to remove from cart api
        try{
            await Promise.all([
                updateProductStock(id, products[id].stock + cartProduct.quantity),
                removeFromCartApi(id)
            ]);
        } catch (error) {
            // rollback to previous state if error occurs
            setProducts(prevProducts);
            setCart(prevCart);
            console.error("Failed to remove from cart:", error);
        }
        finally {
            setIsLoading(false);
        }
    }

    const updateCart = async (id: number, quantity: number) => {
        setIsLoading(true);
        
        const prevProducts = products;
        const prevCart = cart;
        
        const cartProduct = cart[id];
        if (!cartProduct) return;
        if (quantity === 0) return removeFromCart(id);
        const change = cartProduct.quantity - quantity;
        if (change === 0) return;
        setProducts(
            (prevProducts) => ({ ...prevProducts, [id]: { ...prevProducts[cartProduct.id], stock: prevProducts[cartProduct.id].stock + change } })
        )
        setCart(
            (prevCart) => ({ ...prevCart, [id]: { ...prevCart[id], quantity: quantity } })
        )

        // send request to update cart api
        try {
            await Promise.all([
                updateProductStock(id, products[id].stock + change),
                updateCartApi(id, quantity)
            ]);
        } catch (error) {
            // rollback to previous state if error occurs
            setProducts(prevProducts);
            setCart(prevCart);
            console.error("Failed to update cart:", error);
        }
        finally {
            setIsLoading(false);
        }
    }

    return (
        <ProductContext.Provider value={{ products, cart, addToCart, removeFromCart, updateCart, isLoading }}>
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
