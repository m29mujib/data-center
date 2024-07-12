import CountUp, { useCountUp } from "react-countup";
import React from "react";
import Navbar from "../../Navbar/Navbar";
import collocation from "../../../assets/Collocation.gif";
import Footer from "../../Footer/Footer";
import brochurePdf from "../../../assets/BrochureIconPLN.pdf";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Collocation = () => {
  const incentives = [
    {
      name: "Reliabel",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
      description:
        "99.982% tingkat kepastian ketersediaan layanan per tahun didukung oleh data center tier-3",
    },
    {
      name: "Dukungan Teknis",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
      description:
        "Dukungan teknis dari tim ahli yang tersedia sepanjang waktu untuk membantu pemeliharaan dan pemecahan masalah.",
    },
    {
      name: "Efisiensi Operasional",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
      description:
        "Menjamin uptime yang tinggi untuk memastikan operasi bisnis tidak terganggu.",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                  Collocation
                </h2>
                <p className="mt-4 text-gray-500">
                  Nikmati keamanan dan keandalan terbaik dengan layanan Data
                  Center Colocation dari PLN Icon Plus. Kami menyediakan
                  penempatan perangkat server dan jaringan pelanggan dalam
                  fasilitas yang dirancang untuk mendukung performa optimal dan
                  keberlanjutan operasional bisnis Anda. Dengan pengawasan 24/7,
                  kontrol akses biometrik, dan proteksi fisik yang canggih, kami
                  memastikan keamanan perangkat Anda setiap saat. Sistem
                  kelistrikan dengan redundansi dan backup generator memastikan
                  ketersediaan daya tanpa henti, sementara sistem pendinginan
                  canggih menjaga suhu dan kelembaban ideal untuk perangkat
                  Anda.
                </p>
                {/* Button untuk mengunduh brosur */}
                <a
                  href={brochurePdf}
                  download="brosur.pdf"
                  className="mt-4 md:mt-8 no-underline px-5 text-white bg-blue-500 font-medium font-customFont py-3 rounded-md hover:bg-blue-700 hover:text-white flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faDownload} className="mr-2" />
                  Unduh Brosur
                </a>
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={collocation}
                  alt=""
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:block">
                  <div className="sm:flex-shrink-0">
                    <img
                      className="h-16 w-16"
                      src={incentive.imageSrc}
                      alt=""
                    />
                  </div>
                  <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                    <h3 className="text-sm font-medium text-gray-900">
                      {incentive.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {incentive.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Collocation;
