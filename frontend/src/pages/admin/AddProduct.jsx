import { useEffect, useState } from "react";

const AddProduct = () => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch all products
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://api.idns.co.id/api/products");
      const data = await res.json();
      if (Array.isArray(data.data)) {
        setProducts(data.data);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Handle Submit (Create & Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) formData.append("image", image);

    const url = editId
      ? `http://api.idns.co.id/api/products/${editId}`
      : "http://api.idns.co.id/api/products";

    const method = editId ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to save product");

      setTitle("");
      setDescription("");
      setImage(null);
      setEditId(null);
      fetchProducts(); // Refresh data
    } catch (error) {
      console.error("Error saving product:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Apakah Anda yakin ingin menghapus produk ini?")) return;

    try {
      await fetch(`http://api.idns.co.id/api/products/${id}`, { method: "DELETE" });
      fetchProducts(); // Refresh data
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Handle Edit
  const handleEdit = (product) => {
    setTitle(product.title);
    setDescription(product.description);
    setEditId(product.id);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Products</h2>

      {/* Form Create / Update */}
      <form onSubmit={handleSubmit} className="bg-white shadow p-4 rounded mb-6">
        <div className="mb-4">
          <label className="block text-gray-700">Title:</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Description:</label>
          <textarea
            className="w-full p-2 border rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Image:</label>
          <input
            type="file"
            className="w-full p-2 border rounded"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Saving..." : editId ? "Update Product" : "Add Product"}
        </button>
      </form>

      {/* List of Products */}
      <div className="bg-white shadow p-4 rounded">
        <h3 className="text-lg font-bold mb-4">Product List</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Image</th>
              <th className="border border-gray-300 p-2">Title</th>
              <th className="border border-gray-300 p-2">Description</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product.id} className="text-center">
                  <td className="border border-gray-300 p-2">
                    {/* <img
                      src={`http://localhost:5000${product.image}`}
                      alt={product.title}
                      className="w-16 h-16 object-cover rounded"
                    /> */}
                        {product.image ? (
              <img src={product.image} alt={product.title} className="w-16 h-16 object-fill rounded" />
            ) : (
              <p>No Image Available</p>
            )}
                  </td>
                  <td className="border border-gray-300 p-2">{product.title}</td>
                  <td className="border border-gray-300 p-2">{product.description}</td>
                  <td className="border border-gray-300 p-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="border border-gray-300 p-2 text-center">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddProduct;
