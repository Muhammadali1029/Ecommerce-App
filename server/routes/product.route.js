const { createProduct, updateProduct, deleteProduct, getProduct, getAllProducts } = require("../controllers/product.controller");
const { verifyAdmin } = require("../middleware/verifyToken");
const { parser } = require("../utils/cloudinary.js");

const router = require("express").Router();

router.post("/", verifyAdmin, parser.single("image"), createProduct);
router.put("/:id", verifyAdmin, parser.single("image"), updateProduct);
router.delete("/:id", verifyAdmin, deleteProduct);
router.get("/:id", getProduct);
router.get("/", getAllProducts);

module.exports = router;
