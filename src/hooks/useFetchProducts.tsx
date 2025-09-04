import { useEffect, useState } from "react";
import getProducts from "../data/dataLoader";
import type { ProductType } from "../types";

const useFetchProducts = () => {
    const [products, setProducts] = useState<Record<number, ProductType>>({});

    useEffect(()=>{
        const fetchProducts = async () => {
            const response = await getProducts();
            const productsMap: Record<number, ProductType> = {};
            response.products.forEach((product) => {
                productsMap[product.id] = product;
            });
            setProducts(productsMap);
        };
        fetchProducts();
    }, []);

    return {products, setProducts};
};

export default useFetchProducts;
