import { create } from 'zustand'
import type { CartProductType, ProductStoreType } from '../../types'
import { getProducts, updateProductStock } from '../../api/productApi';
import { getCart, updateCart, removeFromCart, addToCart } from '../../api/cartApi';

export const useProductStore = create<ProductStoreType>((set, get) => {
    return {
        isLoading: false,
        products: {},
        cart: {},
        actions: {
            loadCart: async () => {
                set({ isLoading: true });
                try {
                    const cart = await getCart();
                    set({ cart });
                }
                catch (error) {
                    console.error("Error loading data:", error);
                }
                finally {
                    set({ isLoading: false });
                }
            },
            loadProducts: async () => {
                set({ isLoading: true });
                try {
                    const products = await getProducts();
                    set({ products });
                } catch (error) {
                    console.error("Error loading data:", error);
                } finally {
                    set({ isLoading: false });
                }
            },
            addToCart: async (id: number, quantity: number) => {
                if (quantity === 0) return;

                const product = get().products[id];

                const prevProduct = product;

                const newCartItem: CartProductType = { ...product, quantity };
                const newProductStock = product.stock - quantity;

                set((state) => {
                    return {
                        products: {
                            ...state.products,
                            [id]: { ...product, newProductStock }
                        },
                        cart: {
                            ...state.cart,
                            [id]: newCartItem
                        }
                    }
                })

                // Simulate API call
                try {
                    await Promise.all([
                        updateProductStock(id, newProductStock),
                        addToCart(newCartItem)
                    ]);
                } catch (error) {
                    // Handle error (e.g., revert state changes)
                    console.error("Failed to add to cart:", error);
                    const { [id]: _removed, ...remainingCart } = get().cart;
                    set((state) => ({
                        products: {
                            ...state.products,
                            [id]: prevProduct
                        },
                        cart: remainingCart
                    }));
                }

            },
            removeFromCart: async (id: number) => {

                const prevCartItem = get().cart[id]
                const prevProduct = get().products[id]

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

                try {
                    await Promise.all([
                        updateProductStock(id, prevProduct.stock + prevCartItem.quantity),
                        removeFromCart(id)
                    ]);
                }
                catch (error) {
                    console.error("Failed to remove from cart:", error);
                    set((state) => ({
                        products: {
                            ...state.products,
                            [id]: prevProduct
                        },
                        cart: {
                            ...state.cart,
                            [id]: prevCartItem
                        }
                    }));
                }
            },
            updateCart: async (id: number, quantity: number) => {

                const prevCartItem = get().cart[id]
                const prevProduct = get().products[id]

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

                // Simulate API call
                try {
                    await Promise.all([
                        updateProductStock(id, prevProduct.stock + (prevCartItem.quantity - quantity)),
                        updateCart(id, quantity)
                    ]);
                }
                catch (error) {
                    console.log("Failed to update cart:", error);
                    set((state) => ({
                        products: {
                            ...state.products,
                            [id]: prevProduct
                        },
                        cart: {
                            ...state.cart,
                            [id]: prevCartItem
                        }
                    }));
                }
            }
        }
    }
})