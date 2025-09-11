import type { CartProductType } from "../types";

const baseUrl = "http://localhost:3000/api/";

export const getCart = async () => {
    try {
        const cart = await fetch(`${baseUrl}/cart`).then(res => {
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            return res.json();
        });
        return cart;
    }
    catch (error) {
        console.error("Error loading cart:", error);
        return {};
    }
}

export const addToCart = async (cartProduct: CartProductType) => {
    try {
        const response = await fetch(`${baseUrl}/cart`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cartProduct),
        });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const addedProduct = await response.json();
        return addedProduct;
    }
    catch (error) {
        console.error("Error adding to cart:", error);
        return null;
    }
}

export const updateCart = async (id: number, quantity: number) => {
    try {
        const response = await fetch(`${baseUrl}/cart/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ quantity }),
        });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const updatedProduct = await response.json();
        return updatedProduct;
    }
    catch (error) {
        console.error("Error updating cart:", error);
        return null;
    }
}

export const removeFromCart = async (id: number) => {
    try {
        const response = await fetch(`${baseUrl}/cart/${id}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return true;
    }
    catch (error) {
        console.error("Error removing from cart:", error);
        return false;
    }
}
