const cart = {};

exports.addToCart = (cartProduct) => {
    const { productId } = cartProduct;
    if (cart[productId]) {
        cart[productId] += quantity;
    } else {
        cart[productId] = { ...cartProduct};
    }
    return cart[productId];
};

exports.updateCart = (productId, quantity) => {
    if (cart[productId]) {
        cart[productId] = quantity;
    }
    return cart[productId];
};

exports.removeFromCart = (productId) => {
    delete cart[productId];
};

exports.getCart = () => {
    return cart;
};

