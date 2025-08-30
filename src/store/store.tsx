import { create } from 'zustand'
import type { storeType, Product } from '../types'
import getProducts from '../data/dataLoader'

export const useProductStore = create<storeType>((set) => {
    const initialProducts = getProducts().products;

    return {
        theme: 'light',
        products: initialProducts,
        cart: [],
        toggleTheme: () => set((state) => ({
            theme: state.theme === 'light' ? 'dark' : 'light'
        })),
        addToCart: (product, count) => {
            if (count === 0) return
            const stock = product.stock - count;
            set((state) => ({
                products: state.products.map((p) =>
                    p.id === product.id ? { ...p, stock } : p
                ),
                cart: [...state.cart, { ...product, stock: count }]
            }))
        },
        removeFromCart: (product: Product) => {
            set((state) => ({
                products: state.products.map((p) =>
                    p.id === product.id ? { ...p, stock: product.stock } : p
                ),
                cart: state.cart.filter((item) => item.id !== product.id)
            }))
        },
        updateCart: (product, count) => {
            const change = product.stock - count;
            if (change === 0) return;
            set((state) => ({
                products: state.products.map((p) =>
                    p.id === product.id ? { ...p, stock: change } : p
                ),
                cart: state.cart.map((item) =>
                    item.id === product.id ? { ...item, stock: count } : item
                )
            }))
        },
        setProducts: (products: Product[]) => set({ products }),
        setCart: (cart: Product[]) => set({ cart }),
    }
})
