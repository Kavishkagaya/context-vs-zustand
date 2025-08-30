interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    currency: string;
    category: string;
    stock: number;
    image: string;
}

interface ProductContext {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    theme: string;
    toggleTheme: () => void;
    cart: Product[];
    setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

interface CounterProps {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    maxCount?: number;
}

export type { Product, ProductContext, CounterProps };