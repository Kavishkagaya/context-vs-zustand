const { getAllProducts, updateProduct } = require('../services/productService');

exports.getProducts = (req, res) => {
    const products = getAllProducts();
    res.json(products);
}

exports.updateProductItem = (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedProduct = updateProduct(id, updatedData);
    if (updatedProduct) {
        res.json(updatedProduct);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
}