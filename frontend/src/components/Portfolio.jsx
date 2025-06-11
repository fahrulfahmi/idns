import React, { useEffect, useState } from "react";
import axios from "axios";

function Portfolio() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://api.idns.co.id/api/products")
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div id="portfolio" className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {product.image ? (
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain"
              />
            ) : (
              <div className="w-full h-48 flex items-center justify-center bg-gray-200 text-gray-600">
                No Image Available
              </div>
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 text-center">{product.title}</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
