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
}

export type { Product, ProductContext };