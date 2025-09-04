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
    products: Record<number, ProductType>;
    cart: Record<number, CartProductType>;
    addToCart: (id: number, count: number) => void;
    removeFromCart: (id: number) => void;
    updateCart: (id: number, count: number) => void;
}

interface CurrencyContextType {
    currency: string;
    currencies: string[];
    setCurrency: React.Dispatch<React.SetStateAction<string>>;
    currencyConverter: (price: number, currency: string) => number;
    currencyFormatter: (price: number, currency: string) => string;
}

interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

interface ProductStoreType{
    products: ProductType[];
    cart: CartProductType[];
    addToCart: (id: number, count: number) => void;
    removeFromCart: (id: number) => void;
    updateCart: (id: number, count: number) => void;
}

export type { ProductType, CartProductType, ProductContextType, CurrencyContextType, ThemeContextType, ProductStoreType };