import logo from "../assets/logo.png";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 py-8">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
                    
                    {/* Logo & Perusahaan */}
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <a href="#" className="flex items-center space-x-3">
                            <img src={logo} className="h-12" alt="Company Logo" />
                            <span className="text-lg font-semibold dark:text-white">
                                PT Infotech Digital Nusantara
                            </span>
                        </a>
                    </div>

                    {/* Navigasi */}
                    {/* <div className="text-gray-700 dark:text-gray-300">
                        <h3 className="font-semibold text-gray-900 dark:text-white">Navigasi</h3>
                        <ul className="mt-2 space-y-2">
                            <li><a href="#" className="hover:text-blue-500">Tentang Kami</a></li>
                            <li><a href="#" className="hover:text-blue-500">Layanan</a></li>
                            <li><a href="#" className="hover:text-blue-500">Portofolio</a></li>
                            <li><a href="#" className="hover:text-blue-500">Kontak</a></li>
                        </ul>
                    </div> */}

                    {/* Sosial Media */}
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Ikuti Kami</h3>
                        <div className="flex justify-center md:justify-start space-x-4 mt-3 text-gray-600 dark:text-gray-300">
                            <a href="#" className="text-2xl hover:text-blue-500 transition">
                                <FaSquareXTwitter />
                            </a>
                            <a href="#" className="text-2xl hover:text-blue-700 transition">
                                <FaLinkedin />
                            </a>
                            <a href="#" className="text-2xl hover:text-blue-600 transition">
                                <FaFacebook />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Garis Pembatas */}
                <hr className="my-6 border-gray-300 dark:border-gray-700" />

                {/* Copyright */}
                <div className="text-center text-gray-600 dark:text-gray-400 text-sm">
                    © 2025 <a href="#" className="hover:underline">IDN</a>. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
