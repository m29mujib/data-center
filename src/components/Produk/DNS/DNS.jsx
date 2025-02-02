import CountUp, { useCountUp } from "react-countup";
import React from "react";
import Navbar from "../../Navbar/Navbar";
import dns from "../../../assets/DNS GSLB RV.gif";
import Footer from "../../Footer/Footer";
import brochurePdf from "../../../assets/BrochureIconPLN(20240718).pdf";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DNS = () => {
  const incentives = [
    {
      name: "Automated Failover",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
      description:
        "Memastikan layanan tersedia secara terus menerus tanpa downtime yang signifikan, meningkatkan ketersediaan sistem secara keseluruhan.",
    },
    {
      name: "Wide area persistence",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
      description:
        "Memungkinkan data atau layanan tetap tersedia dan dapat diakses dari berbagai lokasi geografis, mengoptimalkan akses global dan redundansi data.",
    },
    {
      name: "Always-on availability",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
      description:
        "Mengaktifkan proses otomatis untuk beralih ke sumber daya cadangan atau alternatif secara cepat jika terjadi kegagalan, meminimalkan waktu pemulihan dan mengurangi dampak downtime.",
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
                  ICONDNS Advance (GSLB)
                </h2>

                <p className="mt-4 text-gray-500">
                  DNS (Domain Name System) oleh PLN Icon Plus adalah
                  infrastruktur krusial dalam internet yang memetakan nama
                  domain menjadi alamat IP, memungkinkan akses yang lancar dan
                  aman ke situs web dan layanan online. Layanan ini mencakup
                  ICON DNS Resolver, yang memfasilitasi pencarian cepat alamat
                  IP dari nama domain, dan ICON DNS Authoritative, yang
                  memberikan jawaban akurat atas permintaan DNS.
                </p>
                <p className="mt-4 text-gray-500">
                  High Performance DNS PLN Icon Plus merupakan carriers/telco
                  grade serta dilengkapi zone transfer secara real time dan di
                  simpan pada memory sehingga performa dns yang sangat baik.
                  memiliki redundancy system Active-Active untuk menjaga
                  Availability layanan DNS.
                </p>
                <p className="mt-4 text-gray-500">
                  Pendistribusian lalu lintas Internet dengan men-translate
                  domain menjadi alamat IP di antara sejumlah besar server
                  terhubung yang tersebar di seluruh dunia. DNS PLN Icon Plus
                  menyediakan manajemen lalu lintas yang cerdas, skalabilitas,
                  perlindungan dalam 2 Data center(IP) atau lebih.
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
                <img src={dns} alt="" className="object-cover object-center" />
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

export default DNS;
