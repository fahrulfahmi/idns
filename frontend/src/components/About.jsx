import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Tentang Perusahaan */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">
            Tentang Kami
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-lg md:max-w-3xl mx-auto">
            PT Infotech Digital Nusantara adalah startup di bidang Telekomunikasi dan Informatika
            yang menyediakan perencanaan jaringan, pengembangan perangkat lunak, serta pengadaan hardware.
            Kami didukung tenaga profesional dengan pengalaman tinggi dalam bidang Payroll & Absensi, 
            E-Psikotest, Helpdesk, serta Monitoring Menara Telekomunikasi berbasis web GIS, Android, dan iOS.
          </p>
        </div>

        {/* Visi dan Misi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-">
          {/* Visi */}
          <div className="bg-white shadow-lg p-6 sm:p-8 rounded-lg text-center">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-3">Visi</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Visi kami adalah menjadi Perusahaan IT Software terpercaya dan berkualitas
              dalam pengembangan & Perencanaan Teknologi Informasi.
            </p>
          </div>

          {/* Misi */}
          <div className="bg-white shadow-lg p-6 sm:p-8 rounded-lg text-center">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-3">Misi</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Misi kami adalah mengembangkan Product IT dan Telekomunikasi yang berkualitas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
