const fs = require("fs");
const path = require("path");
const Product = require("../models/product"); // Pastikan path benar

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        const baseUrl = `${req.protocol}://${req.get("host")}`;

        const updatedProducts = products.map((product) => ({
            ...product.toJSON(),
            image: product.image ? `${baseUrl}/uploads/product/${product.image}` : null
        }));

        res.status(200).json({ success: true, data: updatedProducts });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) return res.status(404).json({ success: false, message: "Product not found" });

        const baseUrl = `${req.protocol}://${req.get("host")}`;
        const updatedProduct = {
            ...product.toJSON(),
            image: product.image ? `${baseUrl}/uploads/product/${product.image}` : null
        };

        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const createProduct = async (req, res) => {
    try {
        const { title, description } = req.body;
        const image = req.file ? req.file.filename : null;

        const newProduct = await Product.create({ title, description, image });

        const baseUrl = `${req.protocol}://${req.get("host")}`;
        const updatedProduct = {
            ...newProduct.toJSON(),
            image: image ? `${baseUrl}/uploads/product/${image}` : null
        };

        res.status(201).json({ success: true, data: updatedProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { title, description } = req.body;
        const product = await Product.findByPk(req.params.id);
        if (!product) return res.status(404).json({ success: false, message: "Product not found" });

        // Jika ada gambar baru, hapus gambar lama
        if (req.file && product.image) {
            const oldImagePath = path.join(__dirname, "..", "uploads", "product", product.image);
            if (fs.existsSync(oldImagePath)) {
                fs.unlinkSync(oldImagePath);
            }
        }

        product.title = title || product.title;
        product.description = description || product.description;
        product.image = req.file ? req.file.filename : product.image;

        await product.save();

        const baseUrl = `${req.protocol}://${req.get("host")}`;
        const updatedProduct = {
            ...product.toJSON(),
            image: product.image ? `${baseUrl}/uploads/product/${product.image}` : null
        };

        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) return res.status(404).json({ success: false, message: "Product not found" });

        // Hapus gambar terkait jika ada
        if (product.image) {
            const imagePath = path.join(__dirname, "..", "uploads", "product", product.image);
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }

        await product.destroy();
        res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

console.log("✅ Exporting productController...");

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};
