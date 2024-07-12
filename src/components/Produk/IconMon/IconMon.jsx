import CountUp, { useCountUp } from "react-countup";
import React from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import iconMon from "../../../assets/IconMon - Modified.gif";
const IconMon = () => {
  const incentives = [
    {
      name: "Real-Time Monitoring",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
      description:
        "Memantau performa jaringan, server, dan aplikasi secara real-time.",
    },
    {
      name: "Statistic Analysis",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
      description:
        "Menyediakan visualisasi data yang mudah dipahami dengan dasbor yang dapat disesuaikan.",
    },
    {
      name: "Service Desk Efficiency",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
      description:
        "Memberikan laporan analitik yang mendalam untuk membantu pengambilan keputusan yang cepat dan tepat.",
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
                  IconMon
                </h2>
                <p className="mt-4 text-gray-500">
                  IconMon, atau Icon Monitoring, adalah produk Monitoring System
                  dari PLN Icon Plus yang memberikan wawasan real-time dan
                  peringatan proaktif, memastikan operasi yang lancar dan
                  kepuasan pelanggan yang meningkat. Dengan antarmuka yang
                  user-friendly dan analitik mendalam, IconMon mempermudah
                  pemantauan dan pengelolaan infrastruktur IT Anda. Sistem ini
                  dirancang untuk mendeteksi dan mencegah masalah sebelum
                  berdampak pada bisnis Anda, memungkinkan tim IT untuk fokus
                  pada inovasi dan pengembangan.
                </p>
                {/* <p className="mt-4 text-gray-500">
                    IconMon juga menawarkan integrasi yang mulus dengan berbagai platform dan alat yang sudah Anda gunakan, memberikan fleksibilitas maksimal dan penghematan waktu. Dengan fitur-fitur seperti pelaporan yang dapat disesuaikan, dasbor interaktif, dan notifikasi yang dapat dikonfigurasi, IconMon menjadi solusi yang komprehensif untuk kebutuhan pemantauan Anda.
                    </p> */}
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={iconMon}
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

export default IconMon;
