import { create } from 'zustand'
import type { ProductType, CartProductType, ProductStoreType } from '../types'
import useFetchProducts from '../hooks/useFetchProducts'

export const useProductStore = create<ProductStoreType>((set) => {
    const {products} = useFetchProducts()

    return {
        products: products,
        cart: {},
        addToCart: (product: ProductType, count: number) => {
            if (count === 0) return
            const stock = product.stock - count;
            set((state) => ({
                products: {
                    ...state.products,
                    [product.id]: { ...product, stock }
                },
                cart: {
                    ...state.cart,
                    [product.id]: { ...product, quantity: count }
                }
            }))
        },
        removeFromCart: (id: number) => {
            set((state) => {
                const cartProduct = state.cart[id];
                if (!cartProduct) return state;

                const finalStock = state.products[cartProduct.id].stock + cartProduct.quantity;
                const { [id]: _removed, ...remainingCart } = state.cart;
                return {
                    products: {
                        ...state.products,
                        [cartProduct.id]: { ...cartProduct, stock: finalStock }
                    },
                    cart: { ...remainingCart }
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