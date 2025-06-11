import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-12 px-6 bg-gray-100">
      <div className="container mx-auto max-w-6xl bg-white rounded-lg shadow-lg p-8">
        {/* Header Kontak */}
        <div className="text-center text-gray-900 mb-8">
          <h2 className="text-4xl font-bold">KONTAK</h2>
          <p className="mt-2 text-lg text-gray-700">
            Hubungi kami untuk berdiskusi seputar jasa IT Consulting, System
            Solution, dan lainnya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Google Maps */}
          <div className="w-full h-80 md:h-full overflow-hidden rounded-lg shadow-lg">
            <iframe
              title="Google Maps"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3004881385004!2d106.80734532579703!3d-6.22405286095899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1a29bc71929%3A0xa44ceca0c7cd9204!2sOne%20Pacific%20Place!5e0!3m2!1sen!2sid!4v1740622452012!5m2!1sen!2sid"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Informasi Kontak */}
          <div className="space-y-6">
            <div className="bg-gray-200 p-6 rounded-lg shadow flex items-start space-x-4">
              <FaMapMarkerAlt className="text-2xl text-red-500 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Alamat Kantor
                </h3>
                <p className="text-gray-700 mt-2">
                  One Pacific Place, 15th Floor, Jalan Jendral Sudirman nomor
                  Kaveling 52-53{" "}
                </p>
              </div>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow flex items-start space-x-4">
              <FaPhoneAlt className="text-2xl text-blue-500 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Kontak</h3>
                <p className="text-gray-700 mt-2">
                  Telepon:{" "}
                  <a
                    href="tel:+6281234567890"
                    className="text-blue-500 font-semibold"
                  >
                    +62812-9508-5286
                  </a>
                </p>
                <p className="text-gray-700">
                  WhatsApp:{" "}
                  <a
                    href="https://wa.me/6281234567890"
                    className="text-green-500 font-semibold"
                  >
                    +62812-9508-5286
                  </a>
                </p>
              </div>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow flex items-start space-x-4">
              <FaEnvelope className="text-2xl text-yellow-500 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                <p className="text-gray-700 mt-2">
                  <a
                    href="mailto:info@infotech.com"
                    className="text-blue-500 font-semibold"
                  >
                    info@infotech.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
