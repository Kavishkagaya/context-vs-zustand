import { createContext, useEffect, useState, useContext } from "react";
import type { Product, ProductContext } from "../types";
import getProducts from "../data/dataLoader";

const ProductContext = createContext<ProductContext | undefined>(undefined);

const ProductContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);
    const [theme, setTheme] = useState<string>("light");

    useEffect(()=>{
        const fetchProducts = async () => {
            const response = await getProducts();
            setProducts(response.products);
        };
        fetchProducts();
    }, []);

    const toggleTheme: () => void = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }

    return (
        <ProductContext.Provider value={{ products, setProducts, theme, toggleTheme, cart, setCart }}>
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
