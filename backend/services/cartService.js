const cart = {};

exports.addToCart = (cartProduct) => {
    const { id, quantity } = cartProduct;
    if (cart[id]) {
        cart[id] += quantity;
    } else {
        cart[id] = { ...cartProduct};
    }
    return cart[id];
};

exports.updateCart = (productId, quantity) => {
    if (cart[productId]) {
        cart[productId] = { ...cart[productId], quantity};
    }
    return cart[productId];
};

exports.removeFromCart = (productId) => {
    delete cart[productId];
};

exports.getCart = () => {
    console.log("Current cart:", cart);
    return cart;
};

