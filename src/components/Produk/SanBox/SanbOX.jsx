import CountUp, { useCountUp } from "react-countup";
import React from "react";
const SanBox = () => {
    const incentives = [
        {
          name: 'Isolated Environment Analysis',
          imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
          description: "Menjalankan file atau kode mencurigakan dalam lingkungan virtual yang aman, memastikan bahwa ancaman dapat dianalisis tanpa risiko terhadap sistem utama.",
        },
        {
          name: 'Zero-Day Threat Detection',
          imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
          description: "Mendeteksi ancaman zero-day dan malware yang tidak terdeteksi oleh metode tradisional, memberikan perlindungan proaktif terhadap serangan baru dan tidak dikenal.",
        },
        {
          name: 'Behavior Monitoring',
          imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
          description:
            "Memantau perilaku file atau kode selama eksekusi dalam sandbox, memungkinkan identifikasi pola perilaku berbahaya untuk pencegahan yang lebih akurat dan efektif.",
        },
      ]
        return (
            <div className="bg-gray-50">
            <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
              <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
                  <div>
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                    SanBox 
                    </h2>
                    <p className="mt-4 text-gray-500">
                    SanBox Unknown adalah solusi keamanan canggih dari ICON+ yang dirancang untuk mendeteksi dan menganalisis ancaman yang tidak dikenal dalam lingkungan yang terisolasi. Dengan menggunakan teknologi sandboxing, SanBox Unknown menjalankan file atau kode mencurigakan dalam lingkungan virtual yang aman untuk memonitor perilaku berbahaya tanpa risiko terhadap sistem utama. Solusi ini memungkinkan identifikasi ancaman zero-day dan malware yang tidak terdeteksi oleh metode tradisional, memberikan lapisan perlindungan tambahan bagi perusahaan. Dengan SanBox Unknown, perusahaan dapat meningkatkan keamanan dan kepercayaan diri mereka dalam menghadapi ancaman siber yang semakin kompleks.
                    </p>
                  </div>
                  <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src="../src/assets/sanbox.gif"
                      alt=""
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                  {incentives.map((incentive) => (
                    <div key={incentive.name} className="sm:flex lg:block">
                      <div className="sm:flex-shrink-0">
                        <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                      </div>
                      <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                        <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                        <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      }

export default SanBox;
