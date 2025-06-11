import { useEffect, useState } from "react";

const AddClient = () => {
  const [clients, setClients] = useState([]);
  const [name, setName] = useState("");
  const [logo, setLogo] = useState(null);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch all clients
  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const res = await fetch("http://api.idns.co.id/api/clients");
      const data = await res.json();
      if (Array.isArray(data.data)) {
        setClients(data.data);
      } else {
        setClients([]); // Pastikan selalu array
      }
    } catch (error) {
      console.error("Error fetching clients:", error);
    }
  };

  // Handle Submit (Create & Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    if (logo) formData.append("logo", logo);

    const url = editId
      ? `http://api.idns.co.id/api/clients/${editId}`: "http://api.idns.co.id/api/clients";

    const method = editId ? "PUT" : "POST";

    // try {
    //   const res = await fetch(url, {
    //     method,
    //     body: formData,
    //   });

    //   if (!res.ok) throw new Error("Failed to save client");
    try {
    console.log("Submitting data:", { method, name, logo });

    const res = await fetch(url, {
      method,
      body: formData,
    });

    const responseText = await res.text();
    console.log("Raw response:", responseText);

    if (!res.ok) {
      throw new Error(`Failed to save client: ${res.status} ${res.statusText}`);
    }

      setName("");
      setLogo(null);
      setEditId(null);
      fetchClients(); // Refresh data
    } catch (error) {
      console.error("Error saving client:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Apakah Anda yakin ingin menghapus client ini?")) return;

    try {
      await fetch(`http://api.idns.co.id/api/clients/${id}`, { method: "DELETE" });
      fetchClients(); // Refresh data
    } catch (error) {
      console.error("Error deleting client:", error);
    }
  };

  // Handle Edit
  const handleEdit = (client) => {
    setName(client.name);
    setEditId(client.id);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Clients</h2>

      {/* Form Create / Update */}
      <form onSubmit={handleSubmit} className="bg-white shadow p-4 rounded mb-6">
        <div className="mb-4">
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Logo:</label>
          <input
            type="file"
            className="w-full p-2 border rounded"
            onChange={(e) => setLogo(e.target.files[0])}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Saving..." : editId ? "Update Client" : "Add Client"}
        </button>
      </form>

      {/* List of Clients */}
      <div className="bg-white shadow p-4 rounded">
        <h3 className="text-lg font-bold mb-4">Client List</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Logo</th>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.length > 0 ? (
              clients.map((client) => (
                <tr key={client.id} className="text-center">
                  <td className="border border-gray-300 p-2">
                    <img
                      src={`http://api.idns.co.id${client.logo}`}
                      alt={client.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="border border-gray-300 p-2">{client.name}</td>
                  <td className="border border-gray-300 p-2">
                    <button
                      onClick={() => handleEdit(client)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(client.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="border border-gray-300 p-2 text-center">
                  No clients found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddClient;
