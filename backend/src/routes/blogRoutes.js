const express = require("express");
const { uploadBlogImage } = require("../middleware/uploadMiddleware");
const { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog } = require("../controllers/blogController");

const router = express.Router();

router.post("/", uploadBlogImage, createBlog);
router.get("/", getAllBlogs);
router.get("/:id", getBlogById);
router.put("/:id", uploadBlogImage, updateBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
