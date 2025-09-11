import { useEffect, useState } from "react";
import { getProducts } from "../../api/productApi";
import type { ProductType } from "../../types";

const useFetchProducts = () => {
    const [products, setProducts] = useState<Record<number, ProductType>>({});

    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const products = await getProducts();
                setProducts(products);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    return { products, setProducts };
};

export default useFetchProducts;
