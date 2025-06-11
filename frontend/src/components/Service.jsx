import React from "react";
import { FaCloud, FaLock, FaLaptopCode, FaCity, FaWifi, FaMicrosoft, FaBusinessTime, FaServer } from "react-icons/fa";

const services = [
  {
    title: "Telecommunication Planning",
    description:
      "Melaksanakan pendataan infrastruktur menara telekomunikasi macrocell di Kabupaten/Kota. Membuat zonasi jaringan telekomunikasi eksisting terhadap menara-menara yang telah beroperasi.",
    icon: <FaServer className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />,
  },
  {
    title: "IT & Business Consultant",
    description:
      "Mendukung konsultasi IT, pengembangan bisnis, manajemen IT, serta infrastruktur IT yang mencakup aplikasi dan perangkat lunak.",
    icon: <FaBusinessTime className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />,
  },
  {
    title: "Smart City Planning",
    description:
      "Menyusun masterplan sebagai acuan perencanaan dan pengembangan Smart City yang sistematis, kondisional, dan realistis.",
    icon: <FaCity className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />,
  },
  {
    title: "Microsoft Azure",
    description:
      "Layanan cloud terintegrasi untuk kebutuhan IaaS dan PaaS dengan fleksibilitas dan keamanan terbaik.",
    icon: <FaMicrosoft className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />,
  },
  {
    title: "Office 365",
    description:
      "Kolaborasi lebih produktif dengan tim di mana saja dan kapan saja, mendukung modern workplace.",
    icon: <FaLaptopCode className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />,
  },
  {
    title: "WiFi Services",
    description:
      "Internet cepat, stabil, dan terpercaya untuk kemudahan bekerja dengan sistem yang dapat disesuaikan.",
    icon: <FaWifi className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />,
  },
  {
    title: "Cloud Services",
    description:
      "Penyimpanan data di cloud yang aman, dapat diakses kapan saja dan di mana saja tanpa bergantung pada server fisik.",
    icon: <FaCloud className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />,
  },
  {
    title: "Security Services",
    description:
      "Layanan keamanan jaringan dengan VPN perusahaan dan End Point Protection bekerja sama dengan principal network security terbaik.",
    icon: <FaLock className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />,
  },
];

const OurService = () => {
  return (
    <section id="service" className="bg-gray-100 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-900 text-left">OUR SERVICES</h2>
        <p className="text-lg text-gray-600 mt-2 text-left">
          Kami menyediakan berbagai layanan berkualitas tinggi untuk mendukung kebutuhan teknologi dan bisnis Anda.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols- lg:grid-cols-4 gap-6 mt-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm text-left"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="text-gray-700 mt-2">{service.description}</p>
              {/* <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:underline mt-3">
                Learn More
                <svg
                  className="w-3 h-3 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                  />
                </svg>
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService;
