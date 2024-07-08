import React, { useState, useEffect } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import image1 from "../../assets/comm1.jpg"; // Adjust the path according to your folder structure
import image2 from "../../assets/comm2.jpg";
import image3 from "../../assets/comm3.jpg";
import Left from "../../assets/left-arrow.png";
import Right from "../../assets/right-arrow.png";
import "./HarizontalParallax.css"; // Make sure to create and link your CSS file

const HorizontalParallax = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [image1, image2, image3];
  const texts = [
    {
      title: "Percayakan keamanan data Anda bersama kami",
      subtitle: "Data Center PLN Icon Plus",
      description: "Depok, Gandul",
      extendedDescription:
        "Kami menawarkan solusi keamanan data terdepan dengan teknologi terbaru. Tim kami yang berpengalaman selalu siap memberikan dukungan yang Anda butuhkan. Dengan fasilitas canggih dan infrastruktur yang andal, data Anda akan terlindungi setiap saat.",
    },
    {
      title: "Profesional dan terpercaya",
      subtitle: "Keunggulan Layanan Kami",
      description: "Pakar IT Berpengalaman",
      extendedDescription:
        "Kami memiliki reputasi yang solid dalam menyediakan layanan profesional dan terpercaya. Kepuasan pelanggan adalah prioritas utama kami. Dengan tim ahli yang berdedikasi, kami menjamin bahwa semua kebutuhan IT Anda terpenuhi dengan standar tertinggi.",
    },
    {
      title: "Inovasi Tanpa Batas",
      subtitle: "Teknologi Masa Depan",
      description: "Pusat Riset dan Pengembangan",
      extendedDescription:
        "Kami berkomitmen untuk memberikan layanan terbaik dengan standar kualitas yang tinggi. Inovasi adalah kunci kami dalam mengembangkan solusi yang dapat diandalkan. Mari bekerja sama untuk mencapai tujuan Anda dan membawa bisnis Anda menuju masa depan yang lebih cerah.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

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
    position: "relative", // Ensure text is positioned relative to the image
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
                <div className="atas flex justify-center items-center w-full">
                  <h1 className="text-title font-customFont text-4xl max-w-[90%] md:text-6xl md:max-w-[90%] text-center">
                    {texts[index].title}
                  </h1>
                </div>
                <div className="tengah flex justify-center items-center w-full">
                  <h2 className="text-subtitle font-customFont text-lg max-w-[80%] md:text-2xl mt-2">
                    {texts[index].subtitle}
                  </h2>
                </div>
                <div className="bawah flex flex-col w-[90%] items-center ">
                  <p className="text-description font-customFont tracking-wide">
                    {texts[index].description}
                  </p>
                  <p className="text-extended-description font-customFont tracking-wide md:px-24 lg:px-24">
                    {texts[index].extendedDescription}
                  </p>
                </div>
              </div>
            </div>
          </Parallax>
        ))}
        <button className="nav-button prev-button" onClick={handlePrev}>
          <img src={Left} className="w-[12px] h-[12px]" />
        </button>
        <button className="nav-button next-button" onClick={handleNext}>
          <img src={Right} className="w-[12px] h-[12px]" />
        </button>
      </div>
    </ParallaxProvider>
  );
};

export default HorizontalParallax;
