import React, { useState } from "react";
import bgContact from "../assets/bg-contact.jpg"; // Pastikan path benar

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:info@infotech.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`
    )}`;
    
    window.location.href = mailtoLink; // Membuka email client default
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center p-6bg-fixed md:bg-scroll"
      style={{ backgroundImage: `url(${bgContact})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="container mx-auto flex flex-wrap justify-center items-center relative z-10 px-4">
        {/* Form di tengah */}
        <div className="w-full max-w-lg backdrop-blur-md shadow-lg p-6 sm:p-8 rounded-lg bg-white bg-opacity-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">Hubungi Kami</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium text-white">Nama</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block font-medium text-white">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block font-medium text-white">Subjek</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block font-medium text-white">Pesan</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;