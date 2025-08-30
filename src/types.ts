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

interface storeType {
    theme: string;
    products: Product[];
    cart: Product[];
    setProducts: (products: Product[]) => void;
    setCart: (cart: Product[]) => void;
    toggleTheme: () => void;
    addToCart: (product: Product, count: number) => void;
    removeFromCart: (product: Product) => void;
    updateCart: (product: Product, count: number) => void;
}

interface CounterProps {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    maxCount?: number;
}

export type { Product, storeType, CounterProps };