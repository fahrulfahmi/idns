const express = require("express");
const {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
} = require("../controllers/productController"); // Pastikan path benar

const { uploadProductImage } = require("../middleware/uploadMiddleware");

const router = express.Router();

// Debugging
// console.log("✅ createProduct:", createProduct);
// console.log("✅ getAllProducts:", getAllProducts);
// console.log("✅ getProductById:", getProductById);
// console.log("✅ updateProduct:", updateProduct);
// console.log("✅ deleteProduct:", deleteProduct);

if (!getAllProducts) {
    console.error("❌ ERROR: getAllProducts is undefined in productRoutes.js");
}

// Rute Produk
router.post("/", uploadProductImage, createProduct); // POST /api/products
router.get("/", getAllProducts);                     // GET /api/products
router.get("/:id", getProductById);                  // GET /api/products/:id
router.put("/:id", uploadProductImage, updateProduct); // PUT /api/products/:id
router.delete("/:id", deleteProduct);    

module.exports = router;
