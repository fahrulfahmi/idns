import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Ikon hamburger menu
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State untuk menu mobile
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fungsi untuk smooth scroll ke elemen di halaman
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); // Tutup menu setelah klik
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 z-50 transition-all duration-300 ${
        isScrolled ? "bg-transparent" : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          {/* <img src={logo} alt="Logo" className="h-12 w-16 md:h-15 md:w-20" /> */}
          <h1>MYONETRAVELINDO</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-bold">
          <button onClick={() => scrollToSection("home")} className="hover:text-gray-600 transition">
            Home
          </button>
          <Link to="/blog" className="hover:text-gray-600 transition">
            Artikel
          </Link>
          <button onClick={() => scrollToSection("clients")} className="hover:text-gray-600 transition">
            Gallery
          </button>
          <button onClick={() => scrollToSection("portfolio")} className="hover:text-gray-600 transition">
            Testimonial
          </button>
          <button onClick={() => scrollToSection("service")} className="hover:text-gray-600 transition">
            Paket Wisata
          </button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-gray-600 transition">
            Contact us
          </button>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 space-y-4 text-center z-50">
          <button onClick={() => scrollToSection("home")} className="block hover:text-gray-600">Home</button>
          <Link to="/blog" className="block hover:text-gray-600" onClick={() => setIsOpen(false)}>
            Blog
          </Link>
          <button onClick={() => scrollToSection("clients")} className="block hover:text-gray-600">Clients</button>
          <button onClick={() => scrollToSection("portfolio")} className="block hover:text-gray-600">Products</button>
          <button onClick={() => scrollToSection("service")} className="block hover:text-gray-600">Service</button>
          <button onClick={() => scrollToSection("contact")} className="block hover:text-gray-600">Contact</button>
          {/* <button
            onClick={() => {
              navigate("/login");
              setIsOpen(false);
            }}
            className="block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition mx-auto"
          >
            Masuk Admin
          </button> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;