require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");
const clientRoutes = require("./routes/clientRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware untuk menyajikan file statis dari folder uploads
app.use("/uploads", express.static(path.resolve(__dirname, "uploads")));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/products", productRoutes);

// Koneksi database
db.authenticate()
  .then(() => console.log("✅ Database Connected"))
  .catch((err) => console.error("❌ Database Connection Failed:", err));

// Jalankan server jika file ini langsung dieksekusi
if (require.main === module) {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on http://api.idns.co.id/${PORT}`));
}

module.exports = app;
