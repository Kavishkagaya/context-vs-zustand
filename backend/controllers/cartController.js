const { getCart, addToCart, updateCart, removeFromCart } = require('../services/cartService');

exports.getAllCartItems = (req, res) => {
    const cart = getCart();
    res.json(cart);
}

exports.addCartItem = (req, res) => {
    const cartProduct = addToCart(req.body);
    res.json({ message: "Item added to cart", cartProduct });
}

exports.updateCartItem = (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;
    const updatedCartItem = updateCart(id, quantity);
    res.json({ message: "Cart item updated", updatedCartItem });
}

exports.removeCartItem = (req, res) => {
    const { id } = req.params;
    removeFromCart(id);
    res.json({ message: "Item removed from cart", productId });
}
