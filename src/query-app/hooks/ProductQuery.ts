import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getProducts, updateProductStock } from "../../api/productApi";
import { addToCart, getCart, removeFromCart, updateCart } from "../../api/cartApi";
import { type ProductType, type CartProductType } from "../../types";

export const useFetchProducts = () =>
    useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    });

export const useFetchCart = () =>
    useQuery({
        queryKey: ["cart"],
        queryFn: getCart,
    });

export const useAddToCart = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (cartItem: CartProductType) => {
            const currentProduct = queryClient.getQueryData<Record<number, ProductType>>(["products"])?.[cartItem.id];
            if (!currentProduct || currentProduct.stock < cartItem.quantity) {
                throw new Error("Insufficient stock");
            }
            await Promise.all([
                addToCart(cartItem),
                updateProductStock(cartItem.id, currentProduct.stock)
            ]);
        },

        onMutate: async (newCartItem: CartProductType) => {
            await queryClient.cancelQueries({ queryKey: ["cart"] });
            await queryClient.cancelQueries({ queryKey: ["products"] });

            const previousCart = queryClient.getQueryData<Record<number, CartProductType>>(["cart"]);
            const previousProducts = queryClient.getQueryData<Record<number, ProductType>>(["products"]);

            // optimistic updates
            queryClient.setQueryData(["cart"], (old: Record<number, CartProductType>) => ({ ...old, [newCartItem.id]: newCartItem }));
            queryClient.setQueryData(["products"], (old: Record<number, ProductType>) => {
                if (!old) return old;
                const product = old[newCartItem.id];
                if (!product) return old;
                return { ...old, [newCartItem.id]: { ...product, stock: product.stock - newCartItem.quantity } };
            });

            return { previousCart, previousProducts };
        },

        onError: (_err, _newItem, context) => {
            if (context?.previousCart) queryClient.setQueryData(["cart"], context.previousCart);
            if (context?.previousProducts) queryClient.setQueryData(["products"], context.previousProducts);
        },

        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["cart"] });
            queryClient.invalidateQueries({ queryKey: ["products"] });
        },
    });
};

export const useUpdateCart = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ productId, quantity }: { productId: number, quantity: number }) => {
            const currentProduct = queryClient.getQueryData<Record<number, ProductType>>(["products"])?.[productId];
            const currentCartItem = queryClient.getQueryData<Record<number, CartProductType>>(["cart"])?.[productId];
            if (!currentProduct || !currentCartItem || currentProduct.stock < quantity) {
                throw new Error("Insufficient stock or item not in cart");
            }

            await Promise.all([
                updateCart(productId, quantity),
                updateProductStock(productId, currentProduct.stock)
            ])
        },
        onMutate: async ({ productId, quantity }: { productId: number, quantity: number }) => {
            await queryClient.cancelQueries({ queryKey: ["cart"] });
            await queryClient.cancelQueries({ queryKey: ["products"] });

            const previousCart = queryClient.getQueryData<Record<number, CartProductType>>(["cart"]);
            const previousProducts = queryClient.getQueryData<Record<number, ProductType>>(["products"]);

            // optimistic updates
            queryClient.setQueryData(["cart"], (old: Record<number, CartProductType>) => {
                if (!old) return old;
                const cartItem = old[productId];
                if (!cartItem) return old;
                return { ...old, [productId]: { ...cartItem, quantity } };
            });
            queryClient.setQueryData(["products"], (old: Record<number, ProductType>) => {
                if (!old) return old;
                const product = old[productId];
                const cartItem = previousCart?.[productId];
                if (!product || !cartItem) return old;
                return { ...old, [productId]: { ...product, stock: product.stock + (cartItem.quantity - quantity) } };
            });

            return { previousCart, previousProducts };
        },
        onError: (_err, _variables, context) => {
            if (context?.previousCart) queryClient.setQueryData(["cart"], context.previousCart);
            if (context?.previousProducts) queryClient.setQueryData(["products"], context.previousProducts);
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["cart"] });
            queryClient.invalidateQueries({ queryKey: ["products"] });
        },
    })
};

export const useRemoveFromCart = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async ({ productId }: { productId: number }) => {
            const currentProduct = queryClient.getQueryData<Record<number, ProductType>>(["products"])?.[productId];
            if (!currentProduct) {
                throw new Error("Item not in cart");
            }

            await Promise.all([
                removeFromCart(productId),
                updateProductStock(productId, currentProduct.stock)
            ])
        },
        onMutate: async ({ productId }: { productId: number }) => {
            await queryClient.cancelQueries({ queryKey: ["cart"] });
            await queryClient.cancelQueries({ queryKey: ["products"] });

            const previousCart = queryClient.getQueryData<Record<number, CartProductType>>(["cart"]);
            const previousProducts = queryClient.getQueryData<Record<number, ProductType>>(["products"]);

            // optimistic updates
            queryClient.setQueryData(["cart"], (old: Record<number, CartProductType>) => {
                if (!old) return old;
                const newCart = { ...old };
                delete newCart[productId];
                return newCart;
            });
            queryClient.setQueryData(["products"], (old: Record<number, ProductType>) => {
                if (!old) return old;
                const product = old[productId];
                const cartItem = previousCart?.[productId];
                if (!product || !cartItem) return old;
                return { ...old, [productId]: { ...product, stock: product.stock + cartItem.quantity } };
            });

            return { previousCart, previousProducts };
        },
        onError: (_err, _variables, context) => {
            if (context?.previousCart) queryClient.setQueryData(["cart"], context.previousCart);
            if (context?.previousProducts) queryClient.setQueryData(["products"], context.previousProducts);
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["cart"] });
            queryClient.invalidateQueries({ queryKey: ["products"] });
        },
    })
}

