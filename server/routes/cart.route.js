const { createCart, deleteCart, updateCart, getCartItem, getAllCartItems } = require("../controllers/cart.controller");
const { verifyAdmin, verifyToken } = require("../middleware/verifyToken");
const router = require("express").Router();

router.post("/", verifyToken, createCart);
router.put("/:id", verifyToken, updateCart);
router.delete("/:id", verifyToken, deleteCart);
router.get("/:id", verifyToken, getCartItem);
router.get("/", verifyToken, getAllCartItems);

module.exports = router;
