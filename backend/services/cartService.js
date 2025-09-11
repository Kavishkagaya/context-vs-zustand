const cart = {};

exports.addToCart = (productId, quantity) => {
    if (cart[productId]) {
        cart[productId] += quantity;
    } else {
        cart[productId] = quantity;
    }
};

exports.updateCart = (productId, quantity) => {
    if (cart[productId]) {
        cart[productId] = quantity;
    }
};

exports.removeFromCart = (productId) => {
    delete cart[productId];
};

exports.getCart = () => {
    return cart;
};

