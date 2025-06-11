import { useState, useEffect } from "react";

const AdminBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("http://api.idns.co.id/api/blogs");
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) formData.append("image", image);

    try {
      const res = await fetch(editingId ? `http://api.idns.co.id/api/blogs/${editingId}` : "http://api.idns.co.id/api/blogs", {
        method: editingId ? "PUT" : "POST",
        body: formData,
      });

      if (res.ok) {
        alert(editingId ? "Blog updated successfully!" : "Blog added successfully!");
        setTitle("");
        setContent("");
        setImage(null);
        setEditingId(null);
        fetchBlogs();
      } else {
        alert("Failed to save blog");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleEdit = (blog) => {
    setEditingId(blog.id);
    setTitle(blog.title);
    setContent(blog.content);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    try {
      const res = await fetch(`http://api.idns.co.id/api/blogs/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        alert("Blog deleted successfully!");
        fetchBlogs();
      } else {
        alert("Failed to delete blog");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Manage Blogs</h2>

      <div className="bg-white shadow-md p-5 rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-3">{editingId ? "Edit Blog" : "Create New Blog"}</h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input 
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <input 
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full p-2 border rounded"
          />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
            {editingId ? "Update Blog" : "Add Blog"}
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white p-4 shadow rounded-lg">
            <img src={`http://api.idns.co.id${blog.image}`} alt={blog.title} className="w-full h-40 object-cover rounded" />
            <h3 className="text-lg font-semibold mt-2">{blog.title}</h3>
            <p className="text-gray-600">{blog.content}</p>
            <div className="flex justify-between mt-3">
              <button onClick={() => handleEdit(blog)} className="px-3 py-1 bg-yellow-500 text-white rounded">Edit</button>
              <button onClick={() => handleDelete(blog.id)} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminBlog;
