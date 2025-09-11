const { getCart, addToCart, updateCart, removeFromCart } = require('../services/cartService');

exports.getAllCartItems = (req, res) => {
    const cart = getCart();
    res.json(cart);
}

exports.addCartItem = (req, res) => {
    const { productId, quantity } = req.body;
    const cartProduct = addToCart(productId, quantity);
    res.json({ message: "Item added to cart", cartProduct });
}

exports.updateCartItem = (req, res) => {
    const { productId, quantity } = req.body;
    const updatedCartItem = updateCart(productId, quantity);
    res.json({ message: "Cart item updated", updatedCartItem });
}

exports.removeCartItem = (req, res) => {
    const { productId } = req.params;
    removeFromCart(productId);
    res.json({ message: "Item removed from cart", productId });
}
