import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Menentukan menu yang sedang aktif
  const isActive = (path) =>
    location.pathname === path ? "bg-blue-500 text-white" : "text-gray-700";

  // Fungsi Logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Hapus token dari localStorage
    navigate("/login"); // Redirect ke halaman login
    window.location.reload(); // Refresh halaman agar state global di-reset
  };

  return (
    <aside className="w-64 min-h-screen bg-gray-100 p-5 shadow-lg fixed flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-5">Admin Panel</h2>
        <ul className="space-y-3">
          <li>
            <Link
              to="/admin"
              className={`block px-4 py-2 rounded-lg ${isActive("/admin")}`}
            >
              🏠 Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/admin/add-blog"
              className={`block px-4 py-2 rounded-lg ${isActive("/admin/add-blog")}`}
            >
              📝 Blog
            </Link>
          </li>
          <li>
            <Link
              to="/admin/add-client"
              className={`block px-4 py-2 rounded-lg ${isActive("/admin/add-client")}`}
            >
              👥 Client
            </Link>
          </li>
          <li>
            <Link
              to="/admin/add-product"
              className={`block px-4 py-2 rounded-lg ${isActive("/admin/add-product")}`}
            >
              📦 Product
            </Link>
          </li>
        </ul>
      </div>

      {/* Tombol Logout */}
      <button
        onClick={handleLogout}
        className="w-full px-4 py-2 mt-4 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        🚪 Logout
      </button>
    </aside>
  );
};

export default Sidebar;
