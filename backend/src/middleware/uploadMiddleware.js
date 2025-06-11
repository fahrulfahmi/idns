const multer = require("multer");
const path = require("path");

// Konfigurasi penyimpanan file berdasarkan folder tujuan
const storage = (folder) => multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, `../uploads/${folder}/`);
        console.log(`📂 Uploading file to: ${uploadPath}`); // Debugging log
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const filename = `${Date.now()}-${file.originalname}`;
        console.log(`✅ File will be saved as: ${filename}`); // Debugging log
        cb(null, filename);
    }
});

// Filter jenis file (hanya gambar)
const fileFilter = (req, file, cb) => {
    console.log(`🔍 Checking file type: ${file.mimetype}`); // Debugging log
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        console.error("❌ File format not supported");
        cb(new Error("File format not supported"), false);
    }
};

// Middleware upload untuk Blog (1 file)
const uploadBlogImage = multer({ storage: storage("blog"), fileFilter }).single("image");

// Middleware upload untuk Client (1 file)
const uploadClientLogo = multer({ storage: storage("client"), fileFilter }).single("logo");

// Middleware upload untuk Product (hanya 1 file)
const uploadProductImage = multer({ storage: storage("product"), fileFilter }).single("image");

module.exports = { uploadBlogImage, uploadClientLogo, uploadProductImage };
