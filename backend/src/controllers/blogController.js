const Blog = require("../models/blog");

// CREATE: Tambah blog baru
exports.createBlog = async (req, res) => {
    try {
        const { title, content } = req.body;
        const image = req.file ? `/uploads/blog/${req.file.filename}` : null;

        const blog = await Blog.create({ title, content, image });
        res.status(201).json(blog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// READ: Ambil semua blog
exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.findAll();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// READ: Ambil satu blog berdasarkan ID
exports.getBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findByPk(id);
        if (!blog) return res.status(404).json({ message: "Blog not found" });
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// UPDATE: Ubah blog berdasarkan ID
exports.updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        const image = req.file ? `/uploads/blog/${req.file.filename}` : null;

        const blog = await Blog.findByPk(id);
        if (!blog) return res.status(404).json({ message: "Blog not found" });

        await blog.update({ title, content, image });
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// DELETE: Hapus blog berdasarkan ID
exports.deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findByPk(id);
        if (!blog) return res.status(404).json({ message: "Blog not found" });

        await blog.destroy();
        res.status(200).json({ message: "Blog deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};