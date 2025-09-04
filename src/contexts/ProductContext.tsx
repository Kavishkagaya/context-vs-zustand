import { createContext, useEffect, useState, useContext } from "react";
import type { CartProduct, Product, ProductContext } from "../types";
import getProducts from "../data/dataLoader";

const ProductContext = createContext<ProductContext | undefined>(undefined);

const ProductContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<CartProduct[]>([]);

    useEffect(()=>{
        const fetchProducts = async () => {
            const response = await getProducts();
            setProducts(response.products);
        };
        fetchProducts();
    }, []);

    const addToCart = (id: number, quantity: number) => {
        const product = products.find(p => p.id === id);
        if (!product || quantity === 0) return;
        const stock = product.stock - quantity;
        setProducts(
            prevProducts => 
                prevProducts.map(
                    p => 
                        p.id === product.id ? 
                    { ...p, stock } : p
                )
        );
        setCart(
            prevCart => {
                const existingItem = prevCart.find(item => item.id === id);
                if (existingItem) {
                    return prevCart.map(item =>
                        item.id === id ? { ...item, quantity: item.quantity + quantity } : item
                    );
                }
                return [
                    ...prevCart,
                    { ...product, quantity: quantity }
                ];
            }
        )
    }

    const removeFromCart = (id: number) => {
        const cartProduct = cart.find(item => item.id === id);
        if (!cartProduct) return;
        setProducts(
            (prevProducts) => prevProducts.map((item) => {
                if (item.id === id) {
                    return { ...item, stock: item.stock + cartProduct.quantity };
                }
                return item;
            })
        )
        setCart(
            (prevCart) => prevCart.filter((item) => item.id !== id)
        )
    }

    const updateCart = (id: number, quantity: number) => {
        const cartProduct = cart.find(item => item.id === id);
        if (!cartProduct) return;
        if (quantity === 0) return removeFromCart(id);
        const change = cartProduct.quantity - quantity;
        if(change === 0) return;
        setProducts(
            (prevProducts) => prevProducts.map((item) => {
                if (item.id === cartProduct.id) {
                    return { ...item, stock: item.stock + change };
                }
                return item;
            })
        )
        setCart(
            (prevCart)=> prevCart.map((item) => {
                if (item.id === cartProduct.id) {
                    return { ...item, quantity: quantity };
                }
                return item;
            })
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
