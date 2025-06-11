import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Client from "../components/Client";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Service from "../components/Service";
import Contact from "../components/Contact";
import Adress from "../components/Adress";

const Landing = () => {
  return (
    <div>
      {/* Navbar hanya untuk halaman landing */}
      <Navbar />

      <main>
        <Home />
        <Client />
        <About />
        <Portfolio />
        <Service />
        <Contact />
        <Adress />
      </main>

      {/* Footer hanya untuk halaman landing */}
      <Footer />
    </div>
  );
};

export default Landing;
