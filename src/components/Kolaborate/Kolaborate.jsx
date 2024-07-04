import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const Kolaborate = () => {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img
      src="../src/assets/comm1.jpg"
      className=" w-[350px] h-[350px] mr-5 rounded-lg"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      src="../src/assets/comm3.jpg"
      className=" w-[350px] h-[350px] rounded-lg"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      src="../src/assets/comm2.jpg"
      className=" w-[350px] h-[350px] rounded-lg"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      src="../src/assets/r.jpg"
      className="w-[350px] h-[350px] rounded-lg"
      onDragStart={handleDragStart}
      role="presentation"
    />,
  ];
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-[5%] py-[3%] md:px-[5%] md:py-[5%]">
      <div>
        <h1 className="text-4xl font-customFont text-[#333]">Kolaborasi</h1>
      </div>
      <div className="w-full h-full mt-5">
        <AliceCarousel
          mouseTracking
          items={items}
          infinite
          autoPlay
          autoPlayInterval={2000}
          // infinite
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
