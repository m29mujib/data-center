import CountUp, { useCountUp } from "react-countup";
import React from "react";
import Navbar from "../../Navbar/Navbar";
import iconMail from "../../../assets/Iconmail Blasting & Marketing.gif";
import Footer from "../../Footer/Footer";
import brochurePdf from "../../../assets/Brosur-ICONMailblasting(20240717).pdf";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconMail = () => {
  const incentives = [
    {
      name: "Efficient Mass Email Delivery",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
      description:
        "Hingga saat ini kami sudah mengirimkan lebih dari 10 Juta email setiap bulannya. Anda dapat mengirimkan ke banyak email sekaligus menggunakan ICONMAIL hanya dengan 3 langkah mudah.",
    },
    {
      name: "Easy Template and Advanced Report Analytics",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
      description:
        "Hanya butuh beberapa menit untuk membuat email cantik dan profesional menggunakan fitur drag and drop, tanpa memerlukan keahlian khusus.  Dari setiap email yang dikirimkan Anda akan melihat laporan seperti email dibuka, siapa yang membuka, link di klik, berapa kali link diklik, spam serta unsubscribe.",
    },
    {
      name: "Complete Email Delivery Solution",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
      description:
        "Platform 3 in 1 ini mendukung Email Transaksional, Email Marketing, dan Validasi Email dengan deliverability superior, integrasi mudah, dan infrastruktur scalable, cocok untuk otomatisasi email Anda.",
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
                  ICONMail Blasting & Marketing
                </h2>
                <p className="mt-4 text-gray-500">
                  ICONMail Blasting & Marketing adalah layanan pengiriman email
                  superior massal dari ICON+ yang dirancang untuk memenuhi
                  kebutuhan kampanye pemasaran digital. Dengan platform yang
                  aman dan andal, layanan ini memungkinkan pengiriman email
                  dalam jumlah sangat besar dalam waktu bersamaan secara efisien
                  dan tepat sasaran. ICONMail Blasting & Marketing dilengkapi
                  dengan fitur analitik canggih yang memberikan wawasan mendalam
                  tentang kinerja kampanye, membantu perusahaan mengoptimalkan
                  strategi pemasaran mereka.
                </p>
                {/* Button untuk mengunduh brosur */}
                <a
                  href={brochurePdf}
                  download="Brosur-ICONMailblasting.pdf"
                  className="mt-3 md:mt-5 no-underline px-5 text-blue-500 bg-white border border-blue-500 font-medium font-customFont py-3 rounded-md hover:bg-blue-700 hover:text-white flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faDownload} className="mr-2" />
                  Unduh Brosur
                </a>
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={iconMail}
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

export default IconMail;
