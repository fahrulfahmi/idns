import homeBg from "../assets/homes.jpg"; // Pastikan path benar

function Home() {
  return (
    <section
      id="home"
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat bg-fixed md:bg-scroll max-w-full overflow-visible flex items-center justify-start px-4 md:px-6"
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      {/* Overlay dengan gradien warna */}
      <div className="absolute inset-0 bg-gradient-to-r to-transparent"></div>

      {/* Konten */}
      <div className="relative z-10 text-white w-full max-w-[90%] sm:max-w-3xl md:max-w-4xl px-4 sm:px-6 md:px-8">
        {/* <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Infotech Digital Nusantara
        </h1>
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl leading-normal max-w-full break-words whitespace-normal">
          PT Infotech Digital Nusantara adalah startup di bidang Telekomunikasi
          dan Informatika yang menyediakan perencanaan jaringan, pengembangan
          perangkat lunak, serta pengadaan hardware. Kami didukung tenaga
          profesional berintegritas tinggi dengan pengalaman di Payroll &
          Absensi, E-Psikotest, Helpdesk, serta Monitoring Menara Telekomunikasi
          berbasis web GIS, Android, dan iOS.
        </p> */}
      </div>
    </section>
  );
}

export default Home;
