import CountUp, { useCountUp } from "react-countup";
import React from "react";
import Navbar from "../../Navbar/Navbar";
import imageFilter from "../../../assets/iconFilter.gif";
import Footer from "../../Footer/Footer";
import brochurePdf from "../../../assets/BrochureIconPLN.pdf";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconFilter = () => {
  const incentives = [
    {
      name: "Defense in depth protection",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
      description:
        "Sistem ini memastikan email yang dikirim/diterima melalui jaringan PLN ICON Plus atau provider lain telah difilter dan dibersihkan dari konten berbahaya, difilter oleh dua brand berbeda untuk meningkatkan akurasi dan keandalan proteksi, meningkatkan keamanan dan keandalan komunikasi email.",
    },
    {
      name: "Email Reputation Optimization",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
      description:
        "Dengan menyaring dan memblokir email berbahaya, ICONMAIL Filtering membantu meningkatkan reputasi email perusahaan, mengurangi kemungkinan email ditandai sebagai spam oleh penerima.",
    },
    {
      name: "Sistem Relay Email Inbound dan Outbound",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
      description:
        "Menggunakan metode perlindungan berlapis, email traffic Inbound dan Outbound dapat di filter untuk meminimalkan risiko ancaman yang lolos.",
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
                  ICONMail Filtering
                </h2>
                <p className="mt-4 text-gray-500">
                  ICONMAIL Filtering adalah solusi penyaringan email yang
                  efektif dari PLN ICON Plus yang dirancang untuk melindungi
                  jaringan dari berbagai ancaman siber. Dengan menggunakan
                  metode penyaringan berlapis, email yang masuk akan melalui
                  serangkaian filter dari dua brand berbeda, masing-masing
                  dengan database dan signature mereka sendiri. Pendekatan ini
                  memastikan bahwa proteksi lebih akurat dan andal, karena jika
                  salah satu filter melewatkan ancaman, filter lainnya dapat
                  mendeteksinya. ICONMAIL Filtering juga berperan penting dalam
                  optimalisasi bandwidth jaringan dengan memblokir 30%-50% email
                  berbahaya setiap harinya, termasuk spam, malware, dan serangan
                  APT Zeroday.
                </p>
                {/* Button untuk mengunduh brosur */}
                <a
                  href={brochurePdf}
                  download="brosur.pdf"
                  className="mt-3 md:mt-5 no-underline px-5 text-blue-500 bg-white border border-blue-500 font-medium font-customFont py-3 rounded-md hover:bg-blue-700 hover:text-white flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faDownload} className="mr-2" />
                  Unduh Brosur
                </a>
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={imageFilter}
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

export default IconFilter;
