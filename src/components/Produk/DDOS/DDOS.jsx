import CountUp, { useCountUp } from "react-countup";
import React from "react";
import Navbar from "../../Navbar/Navbar";
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
                  DDoS Protection & Hidden Master
                </h2>
                <p className="mt-4 text-gray-500">
                  Perlindungan DDoS dari PLN Icon Plus dirancang untuk
                  melindungi infrastruktur digital Anda dari serangan DDoS yang
                  dapat mengganggu operasi bisnis. Dengan teknologi canggih,
                  sistem kami mendeteksi dan mengurangi serangan dalam hitungan
                  detik, memastikan ketersediaan dan kinerja layanan tetap
                  optimal.
                </p>
                <p className="mt-4 text-gray-500">
                  Hidden Master dari PLN Icon Plus adalah solusi manajemen
                  server yang memungkinkan Anda mengendalikan dan mengelola
                  server utama secara tersembunyi, meningkatkan keamanan dan
                  kinerja sistem. Solusi ini dirancang untuk melindungi server
                  utama dari ancaman eksternal dengan memanfaatkan teknik
                  penyembunyian yang canggih, memastikan hanya pengguna yang
                  berwenang yang dapat mengaksesnya.
                </p>
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src="../src/assets/DDoS Protection & Hidden Master.gif"
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
    </div>
  );
};

export default DDOS;
