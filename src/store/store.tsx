import { create } from 'zustand'
import type { storeType, Product } from '../types'
import getProducts from '../data/dataLoader'

export const useProductStore = create<storeType>((set) => {
    const initialProducts = getProducts();

    return {
        theme: 'light',
        products: initialProducts,
        cart: {},
        toggleTheme: () => set((state) => ({
            theme: state.theme === 'light' ? 'dark' : 'light'
        })),
        addToCart: (product: Product, count: number) => {
            if (count === 0) return
            const stock = product.stock - count;
            set((state) => ({
                products: {
                    ...state.products,
                    [product.id]: { ...product, stock }
                },
                cart: {
                    ...state.cart,
                    [product.id]: { ...product, stock: count }
                }
            }))
        },
        removeFromCart: (product: Product) => {
            set((state) => {
                const finalStock = state.products[product.id].stock + product.stock;
                const { [product.id]: _removed, ...remainingCart } = state.cart;
                return {
                    products: {
                        ...state.products,
                        [product.id]: { ...product, stock: finalStock }
                    },
                    cart: {
                        ...remainingCart
                    }
                }
            })
        },
        updateCart: (product, count) => {
            const change = product.stock - count;
            if (change === 0) return;
            set((state) => {
                const finalStock = state.products[product.id].stock + change;
                return {
                    products: {
                        ...state.products,
                        [product.id]: { ...product, stock: finalStock }
                    },
                    cart: {
                        ...state.cart,
                        [product.id]: { ...state.cart[product.id], stock: count }
                    }
                }
            })
        },
        setProducts: (products: Record<number, Product>) => set({ products }),
        setCart: (cart: Record<number, Product>) => set({ cart }),
    }
})
