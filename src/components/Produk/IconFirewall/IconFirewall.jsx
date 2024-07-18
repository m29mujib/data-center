import CountUp, { useCountUp } from "react-countup";
import React from "react";
import Navbar from "../../Navbar/Navbar";
import iconFirewall from "../../../assets/FIREWALL.gif";
import Footer from "../../Footer/Footer";
import brochurePdf from "../../../assets/BrochureIconPLN(20240718).pdf";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Firewall = () => {
  const incentives = [
    {
      name: "Keamanan Tingkat Tinggi",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
      description:
        "Melindungi dari berbagai ancaman siber termasuk exploit, virus, dan malware.",
    },
    {
      name: "Efisiensi Biaya",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
      description:
        "Mengurangi kebutuhan investasi perangkat keras dengan solusi berbasis virtualisasi",
    },
    {
      name: "Fleksibilitas dan Skalabilitas",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
      description:
        "Mudah disesuaikan dengan kebutuhan bisnis yang berkembang, tanpa perlu perubahan infrastruktur besar.",
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
                  Firewall as a Service
                </h2>
                <p className="mt-4 text-gray-500">
                  Firewall as a Service adalah layanan keamanan jaringan
                  berbasis virtualisasi yang dirancang untuk pelanggan ICONCloud
                  dan Colocation Data Center. Layanan ini memberikan
                  perlindungan terhadap ancaman exploit, virus, dan malware yang
                  berasal dari internet, memastikan bahwa data dan sistem
                  pelanggan tetap aman dari serangan berbahaya
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
                  src={iconFirewall}
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

export default Firewall;
