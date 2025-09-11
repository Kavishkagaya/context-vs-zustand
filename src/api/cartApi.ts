import type { CartProductType } from "../types";

const baseUrl = "http://localhost:3000/api";

export const getCart = async () => {
    const cart = await fetch(`${baseUrl}/cart`).then(res => {
        return res.json();
    });
    return cart;
}

export const addToCart = async (cartProduct: CartProductType) => {
    const response = await fetch(`${baseUrl}/cart`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cartProduct),
    });
    const addedProduct = await response.json();
    return addedProduct;
}

export const updateCart = async (id: number, quantity: number) => {
    const response = await fetch(`${baseUrl}/cart/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity }),
    });
    const updatedProduct = await response.json();
    return updatedProduct;
}

export const removeFromCart = async (id: number) => {
    await fetch(`${baseUrl}/cart/${id}`, {
        method: "DELETE",
    });
}
