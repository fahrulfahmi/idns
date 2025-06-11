import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BASE_URL = "http://api.idns.co.id"; // Sesuaikan dengan backend-mu

const BlogDetail = () => {
  const { id } = useParams(); // Ambil ID dari URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}/api/blogs/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setBlog(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blog detail:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (!blog) return <p className="text-center text-red-500">Artikel tidak ditemukan.</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      
      {/* Tampilkan Gambar */}
      <img 
        src={`${BASE_URL}${blog.image}`} 
        alt={blog.title} 
        className="w-full max-h-[400px] object-cover rounded-lg mb-4"
        onError={(e) => { e.target.src = "https://via.placeholder.com/600"; }}
      />

      {/* Tanggal */}
      <p className="text-gray-500 mb-4">
        Diposting pada {new Date(blog.createdAt).toLocaleDateString("id-ID")}
      </p>

      {/* Isi Artikel */}
      <p className="text-lg text-gray-700 leading-relaxed">{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
