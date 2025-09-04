import { create } from 'zustand'
import type { ProductStoreType } from '../types'
import getProducts from '../data/dataLoader';

export const useProductStore = create<ProductStoreType>((set) => {
    const initialProducts = getProducts().products;
    
    return {
        products: initialProducts,
        cart: {},
        addToCart: (id: number, quantity: number) => {
            if (quantity === 0) return;
            set((state) => {
                const product = state.products[id];
                const stock = product.stock - quantity;
                return {
                    products: {
                        ...state.products,
                        [product.id]: { ...product, stock }
                    },
                    cart: {
                        ...state.cart,
                        [product.id]: { ...product, quantity: quantity }
                    }
                }
            })
        },
        removeFromCart: (id: number) => {
            set((state) => {
                const cartProduct = state.cart[id];
                if (!cartProduct) return state;

                const finalStock = state.products[id].stock + cartProduct.quantity;
                const { [id]: _removed, ...remainingCart } = state.cart;
                return {
                    products: {
                        ...state.products,
                        [cartProduct.id]: { ...state.products[id], stock: finalStock }
                    },
                    cart: remainingCart
                }
            })
        },
        updateCart: (id: number, quantity: number) => {
            set((state) => {
                const cartProduct = state.cart[id]
                const change = cartProduct.quantity - quantity;
                if (change === 0) return state;
                const finalStock = state.products[id].stock + change;
                return {
                    products: {
                        ...state.products,
                        [id]: { ...state.products[id], stock: finalStock }
                    },
                    cart: {
                        ...state.cart,
                        [id]: { ...state.cart[id], quantity }
                    }
                }
            })
        }
    }
})