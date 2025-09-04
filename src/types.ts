interface ProductBasicType {
    id: number;
    name: string;
    image: string;
    price: number;
}

interface ProductType extends ProductBasicType {
    description: string;
    category: string;
    stock: number;
}

interface CartProductType extends ProductBasicType {
    quantity: number;
}

interface ProductContextType {
    products: ProductType[];
    cart: CartProductType[];
    addToCart: (id: number, count: number) => void;
    removeFromCart: (id: number) => void;
    updateCart: (id: number, count: number) => void;
}

interface CurrencyContextType {
    currency: string;
    setCurrency: React.Dispatch<React.SetStateAction<string>>;
    currencyConverter: (price: number, currency: string) => number;
    currencyFormatter: (price: number, currency: string) => string;
}

interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

interface CounterProps {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    maxCount?: number;
}

export type { ProductType, CartProductType, ProductContextType, CurrencyContextType, ThemeContextType, CounterProps };