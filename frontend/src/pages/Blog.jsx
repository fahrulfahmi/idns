import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BASE_URL = "http://api.idns.co.id"; // Sesuaikan dengan backend-mu

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/api/blogs`)
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <>
    <Navbar/>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Blog Page</h1>

      {blogs.length === 0 ? (
        <p className="text-gray-500">Tidak ada artikel saat ini.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="border p-4 rounded-lg shadow-md bg-white">
              {/* Gambar Blog */}
              <img 
                src={`${BASE_URL}${blog.image}`} 
                alt={blog.title} 
                className="w-full h-48 object-contain rounded-lg mb-4"
                onError={(e) => { e.target.src = "https://via.placeholder.com/300"; }}
              />
              {/* Judul dan Deskripsi */}
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-gray-600">{blog.content}</p>
              {/* Link ke Detail Blog */}
              <a href={`/blog/${blog.id}`} className="text-blue-500 mt-2 inline-block">
                Baca Selengkapnya
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
    <Footer />
    </>
  );
};

export default Blog;
