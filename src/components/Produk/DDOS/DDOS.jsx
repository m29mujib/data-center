import React from "react";
import Navbar from "../../Navbar/Navbar";
import imageDdos from "../../../assets/DDoS Protection & Hidden Master.gif";
import Footer from "../../Footer/Footer";

import brochurePdf from "../../../assets/BrochureIconPLN(20240718).pdf";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DDOS = () => {
  const incentives = [
    {
      name: "Real-Time Monitoring",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
      description:
        "Memberikan visibilitas penuh terhadap kinerja sistem secara langsung, memungkinkan respons cepat terhadap perubahan atau masalah yang muncul.",
    },
    {
      name: "Scalability",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
      description:
        "Memungkinkan perluasan infrastruktur dengan mudah sesuai dengan kebutuhan bisnis yang berkembang, tanpa mengorbankan performa atau keamanan.",
    },
    {
      name: "Enhanced Security",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
      description:
        "Melindungi data dan infrastruktur dari ancaman cyber dengan teknologi terbaru dan kontrol akses yang ketat.",
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
                  ICONDNS DDoS Protection
                </h2>
                <p className="mt-4 text-gray-500">
                  Perlindungan DDoS dari PLN Icon Plus dirancang untuk
                  melindungi infrastruktur digital Anda dari serangan DDoS yang
                  dapat mengganggu operasi bisnis. Dengan teknologi canggih,
                  sistem kami mendeteksi dan mengurangi serangan dalam hitungan
                  detik, memastikan ketersediaan dan kinerja layanan tetap
                  optimal.
                </p>

                {/* text main */}
                <p className="mt-4 text-gray-500">
                  Hidden Master dari PLN Icon Plus adalah solusi manajemen
                  server yang memungkinkan Anda mengendalikan dan mengelola
                  server utama secara tersembunyi, meningkatkan keamanan dan
                  kinerja sistem. Solusi ini dirancang untuk melindungi server
                  utama dari ancaman eksternal dengan memanfaatkan teknik
                  penyembunyian yang canggih, memastikan hanya pengguna yang
                  berwenang yang dapat mengaksesnya.
                </p>
                {/* Button untuk mengunduh brosur */}
                <a
                  href={brochurePdf}
                  download="Brosur-DataCenter-IconPlus.pdf"
                  className="mt-3 md:mt-5 no-underline px-5 text-blue-500 bg-white border border-blue-500 font-medium font-customFont py-3 rounded-md hover:bg-blue-700 hover:text-white flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faDownload} className="mr-2" />
                  Unduh Brosur
                </a>
              </div>

              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={imageDdos}
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
        <Footer />
      </div>
    </div>
  );
};

export default DDOS;
