import React, { useState, useEffect } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import image1 from "../../assets/comm1.jpg"; // Adjust the path according to your folder structure
import image2 from "../../assets/comm2.jpg";
import image3 from "../../assets/comm3.jpg";
import "./HarizontalParallax.css"; // Make sure to create and link your CSS file

const HorizontalParallax = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [image1, image2, image3];
  const texts = [
    {
      title: "Data Center Icon Plus",
      subtitle: "Subtitle for Image 1",
      description: "Description for Image 1",
    },
    {
      title: "Text for Image 2",
      subtitle: "Subtitle for Image 2",
      description: "Description for Image 2",
    },
    {
      title: "Text for Image 3",
      subtitle: "Subtitle for Image 3",
      description: "Description for Image 3",
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
      <div className="slider-container">
        {images.map((image, index) => (
          <Parallax
            key={index}
            x={[20, -20]}
            tagOuter="div"
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <div
              className="parallax-item"
              style={{
                ...parallaxStyle,
                backgroundImage: `url(${image})`,
              }}
            >
              <div className="image-text">
                <h1 className="text-title">{texts[index].title}</h1>
                <h2 className="text-subtitle">{texts[index].subtitle}</h2>
                <p className="text-description">{texts[index].description}</p>
              </div>
            </div>
          </Parallax>
        ))}
        <button className="nav-button prev-button" onClick={handlePrev}>
          &#8249;
        </button>
        <button className="nav-button next-button" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </ParallaxProvider>
  );
};

export default HorizontalParallax;
