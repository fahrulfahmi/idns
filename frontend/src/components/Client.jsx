import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch("http://api.idns.co.id/api/clients")
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);
        setClients(data.data);
      })
      .catch((error) => console.error("Error fetching clients:", error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <section id="clients" className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
          Our Clients
        </h2>
        <div className="w-full max-w-screen-lg mx-auto">
          <Slider {...settings}>
            {clients.map((client) => (
              <div key={client.id} className="px-3 flex flex-col items-center text-center">
                <img
                  src={`http://api.idns.co.id${client.logo}`}
                  alt={client.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain rounded-md shadow-md"
                />
                <h3 className="text-xs sm:text-sm md:text-lg font-semibold text-gray-700 text-center mt-2">
                  {client.name}
                </h3>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Clients;
