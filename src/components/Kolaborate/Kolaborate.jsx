import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image78 from "../../assets/image 78.png"
import image79 from "../../assets/image 79.png"
import image81 from "../../assets/image 81.png"
import image82 from "../../assets/image 82.png"
import image83 from "../../assets/image 83.png"
import image84 from "../../assets/image 84.png"
import image85 from "../../assets/image 85.png"
import image86 from "../../assets/image 86.png"
import image87 from "../../assets/image 87.png"
import image88 from "../../assets/image 88.png"
import image89 from "../../assets/image 89.png"
import image90 from "../../assets/image 90.png"
import image91 from "../../assets/image 91.png"
import image92 from "../../assets/image 92.png"
import image93 from "../../assets/image 93.png"
import image94 from "../../assets/image 94.png"
import image95 from "../../assets/image 95.png"
import image96 from "../../assets/image 96.png"
import image97 from "../../assets/image 97.png"
import image98 from "../../assets/image 98.png"

const Kolaborate = () => {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <div className="mx-[10px]" key="1">
      <img
        src={image78}
        className="w-[200px] h-[110px] rounded-lg"
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div className="mx-[10px]" key="2">
      <img
        src={image79}
        className="w-[200px] h-[110px] rounded-lg"
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div className="mx-[10px]" key="3">
      <img
        src={image81}
        className="w-[200px] h-[110px] rounded-lg"
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div className="mx-[10px]" key="4">
      <img
        src={image82}
        className="w-[200px] h-[110px] rounded-lg"
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div className="mx-[10px]" key="4">
      <img
        src={image83}
        className="w-[200px] h-[110px] rounded-lg"
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div className="mx-[10px]" key="4">
      <img
        src={image84}
        className="w-[200px] h-[110px] rounded-lg"
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div className="mx-[10px]" key="4">
      <img
        src={image85}
        className="w-[200px] h-[110px] rounded-lg"
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div className="mx-[10px]" key="4">
      <img
        src={image86}
        className="w-[200px] h-[110px] rounded-lg"
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div className="mx-[10px]" key="4">
      <img
        src={image87}
        className="w-[200px] h-[110px] rounded-lg"
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div className="mx-[10px]" key="4">
      <img
        src={image88}
        className="w-[200px] h-[110px] rounded-lg"
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div className="mx-[10px]" key="4">
      <img
        src={image89}
        className="w-[200px] h-[110px] rounded-lg"
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div className="mx-[10px]" key="4">
      <img
        src={image90}
        className="w-[200px] h-[110px] rounded-lg"
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div className="mx-[10px]" key="4">
      <img
        src={image91}
        className="w-[200px] h-[110px] rounded-lg"
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div className="mx-[10px]" key="4">
      <img
        src={image92}
        className="w-[200px] h-[110px] rounded-lg"
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div className="mx-[10px]" key="4">
      <img
        src={image93}
        className="w-[200px] h-[110px] rounded-lg"
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div className="mx-[10px]" key="4">
      <img
        src={image94}
        className="w-[200px] h-[110px] rounded-lg"
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div className="mx-[10px]" key="4">
      <img
        src={image95}
        className="w-[200px] h-[110px] rounded-lg"
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div className="mx-[10px]" key="4">
      <img
        src={image96}
        className="w-[200px] h-[110px] rounded-lg"
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div className="mx-[10px]" key="4">
      <img
        src={image97}
        className="w-[200px] h-[110px] rounded-lg"
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div className="mx-[10px]" key="4">
      <img
        src={image98}
        className="w-[200px] h-[100px] rounded-lg"
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
  ];

  return (
    <div className="w flex flex-col items-center justify-center px-[5%] py-[3%] md:px-[5%] md:py-[5%]">
      <div>
        <h1 className="md:text-4xl text-2xl font-bold font-customFont text-[#333] mb-5">
          {" "}
          Sertifikasi kami
        </h1>
      </div>
      <div className="w-full h-full mt-5">
        <AliceCarousel
          mouseTracking
          items={items}
          infinite
          autoPlay
          autoPlayInterval={3000}
          responsive={{
            0: { items: 1 },
            640: { items: 2 },
            768: { items: 3 },
            1024: { items: 4 },
          }}
          disableButtonsControls
        />
      </div>
    </div>
  );
};

export default Kolaborate;
