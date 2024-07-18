import CountUp, { useCountUp } from "react-countup";
import React from "react";
import Navbar from "../../Navbar/Navbar";
import imageCloud from "../../../assets/IconCloud.gif";
import Footer from "../../Footer/Footer";
import brochurePdf from "../../../assets/BrochureIconPLN(20240718).pdf";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconCloud = () => {
  const incentives = [
    {
      name: " ICON+ Virtual Machine",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
      description:
        "Pelanggan seperti memiliki server sendiri yang terpartisi secara virtual, sehingga fleksibel dan private.",
    },
    {
      name: " ICON+ Virtual Private Data Center",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
      description:
        "Layanan Data Center andal yang tervisualisasi secara private.",
    },
    {
      name: " ICON+ Virtual Dedicated Machine",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
      description:
        "Layanan ini memberikan infrasturktur Virtual Data Center secara fisik (resource computing, storage, dan network).",
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
                  ICONCloud
                </h2>
                <p className="mt-4 text-gray-500">
                  ICONCloud Virtual Data Center menawarkan solusi layanan yang
                  lengkap untuk berbagai kebutuhan infrastruktur cloud
                  computing, memastikan kinerja bisnis yang optimal dan efisien.
                  Dengan ICONCloud, Anda dapat menikmati keamanan data yang
                  tinggi melalui enkripsi end-to-end dan protokol keamanan
                  canggih, serta skalabilitas yang fleksibel yang memungkinkan
                  penambahan sumber daya sesuai pertumbuhan bisnis Anda. Layanan
                  ini dirancang untuk mengurangi biaya operasional dengan model
                  pembayaran fleksibel dan menyediakan konektivitas superior
                  dengan latensi rendah untuk performa aplikasi yang optimal.
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
                  src={imageCloud}
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

export default IconCloud;
