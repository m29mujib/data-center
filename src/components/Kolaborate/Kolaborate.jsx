import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Kolaborate = () => {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <div className="mx-[10px]" key="1">
      <img
        src="../src/assets/comm1.jpg"
        className="w-[600px] h-[190px] rounded-lg"
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div className="mx-[10px]" key="2">
      <img
        src="../src/assets/comm3.jpg"
        className="w-[600px] h-[190px] rounded-lg"
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div className="mx-[10px]" key="3">
      <img
        src="../src/assets/comm2.jpg"
        className="w-[600px] h-[190px] rounded-lg"
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div className="mx-[10px]" key="4">
      <img
        src="../src/assets/r.jpg"
        className="w-[600px] h-[190px] rounded-lg"
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div className="mx-[10px]" key="4">
      <img
        src="../src/assets/r.jpg"
        className="w-[600px] h-[190px] rounded-lg"
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
  ];

  return (
    <div className="w flex flex-col items-center justify-center px-[5%] py-[3%] md:px-[5%] md:py-[5%]">
      <div>
        <h1 className="text-4xl font-customFont text-[#333]">Kolaborasi</h1>
      </div>
      <div className="w-full h-full mt-5">
        <AliceCarousel
          mouseTracking
          items={items}
          infinite
          autoPlay
          autoPlayInterval={1000}
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
