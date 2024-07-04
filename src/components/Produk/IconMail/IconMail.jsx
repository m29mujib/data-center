import CountUp, { useCountUp } from "react-countup";
import React from "react";
import Navbar from "../../Navbar/Navbar";
const IconMail = () => {
  const incentives = [
    {
      name: "Efficient Mass Email Delivery",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
      description:
        "Memungkinkan pengiriman email dalam jumlah besar dengan cepat dan tepat sasaran, mendukung kampanye pemasaran digital yang efektif.",
    },
    {
      name: "Advanced Campaign Analytics",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
      description:
        "Dilengkapi dengan fitur analitik yang memberikan wawasan mendalam tentang kinerja kampanye, membantu perusahaan mengukur keberhasilan dan mengoptimalkan strategi pemasaran.",
    },
    {
      name: "Security and Layered Filtering",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg",
      description:
        "Sistem penyaringan berlapis dari ICON+ memastikan email yang dikirim bersih dari konten berbahaya, menjaga reputasi dan integritas komunikasi bisnis.",
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
                  Iconmail Blasting & Marketing
                </h2>
                <p className="mt-4 text-gray-500">
                  ICONMAIL Blasting & Marketing adalah layanan pengiriman email
                  massal dari ICON+ yang dirancang untuk memenuhi kebutuhan
                  kampanye pemasaran digital. Dengan platform yang aman dan
                  andal, layanan ini memungkinkan pengiriman email dalam jumlah
                  besar secara efisien dan tepat sasaran. ICONMAIL Blasting &
                  Marketing dilengkapi dengan fitur analitik canggih yang
                  memberikan wawasan mendalam tentang kinerja kampanye, membantu
                  perusahaan mengoptimalkan strategi pemasaran mereka.
                </p>
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src="../src/assets/Iconmail Blasting & Marketing.gif"
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

export default IconMail;
