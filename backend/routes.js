const router = require("express").Router()
const { getProducts, updateProductItem } = require("./controllers/productControler")
const { getAllCartItems, addCartItem, removeCartItem, updateCartItem } = require("./controllers/cartController")

router.get("/products", getProducts)
router.put("/products/:id", updateProductItem)

router.get("/cart", getAllCartItems)
router.post("/cart", addCartItem)
router.put("/cart/:id", updateCartItem)
router.delete("/cart/:id", removeCartItem)

module.exports = router