import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://api.idns.co.id"; // Sesuaikan dengan backend-mu

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }), // Kirim username & password
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token); // Simpan token di localStorage
        navigate("/admin"); // Redirect ke halaman admin setelah login
      } else {
        setError(data.message || "Login gagal. Periksa username dan password.");
      }
    } catch (error) {
      setError("Terjadi kesalahan, coba lagi.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleLogin} className="p-6 shadow-md rounded-md bg-white">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          className="border p-2 w-full mb-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
