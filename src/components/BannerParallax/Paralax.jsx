import React, { useState, useEffect } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import image1 from "../../assets/comm1.jpg";
import image2 from "../../assets/comm2.jpg";
import image3 from "../../assets/comm3.jpg";
import Left from "../../assets/left-arrow.png";
import Right from "../../assets/right-arrow.png";
import "./HarizontalParallax.css"; // Pastikan file CSS terhubung

const HorizontalParallax = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [image1, image2, image3];
  const texts = [
    {
      title: "Percayakan keamanan data Anda bersama kami",
      subtitle: "Data Center PLN Icon Plus",
      description: "Depok, Gandul",
      extendedDescription:
        "Solusi keamanan data terdepan dengan teknologi terbaru dan dukungan tim berpengalaman. Dengan fasilitas canggih dan infrastruktur andal, data Anda terlindungi setiap saat.",
    },
    {
      title: "Profesional dan terpercaya",
      subtitle: "Keunggulan Layanan Kami",
      // description: "Pakar IT Berpengalaman",
      extendedDescription:
        "Menawarkan layanan profesional dan terpercaya dengan tim ahli yang berdedikasi, memastikan kepuasan pelanggan adalah prioritas utama kami.",
    },
    {
      title: "Inovasi Tanpa Batas",
      subtitle: "Teknologi Masa Depan",
      // description: "Pusat Riset dan Pengembangan",
      extendedDescription:
        "Berkomitmen untuk memberikan layanan terbaik dengan standar kualitas tinggi. Inovasi kami kunci dalam mengembangkan solusi handal.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 15000); // Ganti slide setiap 15 detik

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const parallaxStyle = {
    minWidth: "100vw",
    height: "100vh",
    position: "relative",
  };

  const textStyle = {
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    // Tambahkan properti CSS lainnya sesuai kebutuhan
  };

  return (
    <ParallaxProvider>
      <div className="relative slider-container flex justify-center items-center w-full h-screen">
        {images.map((image, index) => (
          <Parallax
            key={index}
            x={[20, -20]}
            tagOuter="div"
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <div
              className="parallax-item flex justify-center items-center w-full h-screen"
              style={{
                ...parallaxStyle,
                backgroundImage: `url(${image})`,
              }}
            >
              <div className="image-text flex justify-center items-center flex-col w-full h-screen">
                <div
                  className="atas flex justify-center items-center w-full"
                  style={textStyle}
                >
                  <h1 className="text-title font-customFont text-4xl max-w-[90%] md:text-6xl md:max-w-[90%] text-center">
                    {texts[index].title}
                  </h1>
                </div>
                <div
                  className="tengah flex justify-center items-center w-full"
                  style={textStyle}
                >
                  <h2 className="text-subtitle font-customFont text-lg max-w-[80%] md:text-2xl mt-2">
                    {texts[index].subtitle}
                  </h2>
                </div>
                <div
                  className="bawah flex flex-col w-[90%] items-center"
                  style={textStyle}
                >
                  <p className="text-description font-customFont tracking-wide">
                    {texts[index].description}
                  </p>
                  <p className="text-extended-description font-customFont tracking-3 md:px-24 lg:px-24  tracking-wider">
                    {texts[index].extendedDescription}
                  </p>
                </div>
              </div>
            </div>
          </Parallax>
        ))}
        <button className="nav-button prev-button" onClick={handlePrev}>
          <img src={Left} className="w-[12px] h-[12px]" alt="Previous" />
        </button>
        <button className="nav-button next-button" onClick={handleNext}>
          <img src={Right} className="w-[12px] h-[12px]" alt="Next" />
        </button>
      </div>
    </ParallaxProvider>
  );
};

export default HorizontalParallax;
