import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useMemo } from "react";
import Sidebar from "./components/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute";
import Landing from "./pages/landing";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Login from "./pages/admin/Login";
import Admin from "./pages/admin/Admin";
import AddBlog from "./pages/admin/AddBlog";
import AddClient from "./pages/admin/AddClient";
import AddProduct from "./pages/admin/AddProduct";

function Layout() {
  const location = useLocation();
  const isAdminPage = useMemo(() => location.pathname.startsWith("/admin"), [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <div className="flex flex-grow">
        {/* Sidebar hanya muncul di halaman admin */}
        {isAdminPage && (
          <aside className="hidden md:block w-64 fixed top-0 left-0 h-full bg-gray-900 text-white shadow-lg">
            <Sidebar />
          </aside>
        )}

        <main className={`max-w-full flex-grow p-5 pt-16 ${isAdminPage ? "md:ml-64" : ""}`}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/login" element={<Login />} />

            {/* Protected Admin Pages */}
            <Route element={<ProtectedRoute />}>
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/add-blog" element={<AddBlog />} />
              <Route path="/admin/add-client" element={<AddClient />} />
              <Route path="/admin/add-product" element={<AddProduct />} />
            </Route>

            <Route path="*" element={<h1 className="text-center text-2xl font-bold">404 - Page Not Found</h1>} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
