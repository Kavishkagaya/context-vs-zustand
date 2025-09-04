interface ProductBasic {
    id: number;
    name: string;
    image: string;
    price: number;
}

interface Product extends ProductBasic {
    description: string;
    category: string;
    stock: number;
}

interface CartProduct extends ProductBasic {
    quantity: number;
}

interface ProductContext {
    products: Product[];
    cart: CartProduct[];
    addToCart: (id: number, count: number) => void;
    removeFromCart: (id: number) => void;
    updateCart: (id: number, count: number) => void;
}

interface CurrencyContext {
    currency: string;
    setCurrency: React.Dispatch<React.SetStateAction<string>>;
    currencyConverter: (price: number, currency: string) => number;
    currencyFormatter: (price: number, currency: string) => string;
}

interface CounterProps {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    maxCount?: number;
}

export type { Product, CartProduct, ProductContext, CurrencyContext, CounterProps };