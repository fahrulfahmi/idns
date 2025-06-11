import axios from "axios";

const API_BASE_URL = "http://api.idns.co.id/api";

// Membuat instance axios dengan konfigurasi default
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor untuk menambahkan token ke setiap request jika ada
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Fungsi untuk login
export const loginUser = async (credentials) => {
  try {
    const response = await api.post("/auth/login", credentials);
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }
    return response.data;
  } catch (error) {
    throw error.response?.data || "Login failed";
  }
};

// Fungsi untuk mendapatkan daftar blog
export const getBlogs = async () => {
  try {
    const response = await api.get("/blogs");
    return response.data;
  } catch (error) {
    throw error.response?.data || "Failed to fetch blogs";
  }
};

// Fungsi untuk menambahkan blog baru
export const createBlog = async (blogData) => {
  try {
    const response = await api.post("/blogs", blogData);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Failed to create blog";
  }
};

// Fungsi untuk mendapatkan daftar client
export const getClients = async () => {
  try {
    const response = await api.get("/clients");
    return response.data;
  } catch (error) {
    throw error.response?.data || "Failed to fetch clients";
  }
};

// Fungsi untuk menambahkan client baru
export const createClient = async (clientData) => {
  try {
    const response = await api.post("/clients", clientData);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Failed to create client";
  }
};

// Fungsi untuk mendapatkan daftar produk
export const getProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    throw error.response?.data || "Failed to fetch products";
  }
};

// Fungsi untuk menambahkan produk baru
export const createProduct = async (productData) => {
  try {
    const response = await api.post("/products", productData);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Failed to create product";
  }
};

// Logout (hapus token dari localStorage)
export const logoutUser = () => {
  localStorage.removeItem("token");
};

export default api;
