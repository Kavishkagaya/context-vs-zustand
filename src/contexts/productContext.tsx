import { createContext, useEffect, useState } from "react";
import type { Product } from "../types";
import getProducts from "../data/dataLoader";

const ProductContext = createContext({});

const ProductContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [theme, setTheme] = useState<string>("light");

    useEffect(()=>{
        const fetchProducts = async () => {
            const response = await getProducts();
            setProducts(response.products);
        };
        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider value={{ products, setProducts, theme, setTheme }}>
            {children}
        </ProductContext.Provider>
    );
};

export { ProductContextProvider };
