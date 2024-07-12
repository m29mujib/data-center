import CountUp, { useCountUp } from "react-countup";
import React from "react";
import Navbar from "../../Navbar/Navbar";
import dns from "../../../assets/DNS GSLB RV.gif"
import Footer from "../../Footer/Footer";

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
                  DNS GSLB RV
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
