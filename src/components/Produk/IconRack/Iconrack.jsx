import React from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import iconRack from "../../../assets/iconrack.gif";
import brochurePdf from "../../../assets/BrochureIconPLN(20240718).pdf";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconRack = () => {
  const incentives = [
    {
      name: "More efficient monitoring",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
      description:
        "Dengan smart monitoring, Anda dapat memantau kondisi rak secara real-time dari jarak jauh melalui aplikasi atau platform khusus. Hal ini memungkinkan Anda untuk mengidentifikasi masalah dengan cepat dan mengambil tindakan yang diperlukan.",
    },
    {
      name: "Cost savings",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
      description:
        "Dengan adanya smart monitoring, Anda dapat mencegah kerusakan atau kehilangan barang yang disimpan di rak karena dapat melakukan pemantauan secara teratur. Hal ini dapat mengurangi biaya perbaikan atau penggantian barang yang rusak.",
    },
    {
      name: "Security improvements",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
      description:
        "Smart monitoring rak juga dapat membantu dalam memantau keamanan barang-barang yang disimpan di rak. Anda dapat menerima notifikasi jika terjadi aktivitas mencurigakan atau akses yang tidak sah ke rak tersebut.",
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
                  IconRack
                </h2>
                <p className="mt-4 text-gray-500">
                  IconRack, atau Icon Rack Monitoring, adalah produk Rack
                  Monitoring System dari PLN Icon Plus yang memberikan wawasan
                  real-time dan peringatan proaktif, Dengan smart monitoring,
                  Anda dapat memantau kondisi rak secara real-time dari jarak
                  jauh melalui aplikasi atau platform khusus. Hal ini
                  memungkinkan Anda untuk mengidentifikasi masalah dengan cepat
                  dan mengambil tindakan yang diperlukan. Dengan demikian, smart
                  monitoring rak dapat memberikan berbagai manfaat penting bagi
                  pengelolaan penyimpanan barang secara lebih efisien dan
                  efektif.
                </p>
                {/* Button untuk mengunjungi halaman */}
                <a
                  href="http://smartmonitoringrack.plniconpln.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 no-underline px-5 text-white bg-green-500 font-medium font-customFont py-3 rounded-md hover:bg-green-700 hover:text-white flex items-center justify-center"
                >
                  Selengkapnya
                </a>
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
                  src={iconRack}
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

export default IconRack;
