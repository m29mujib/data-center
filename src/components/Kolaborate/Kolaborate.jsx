import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image17 from "../../assets/aa.jpg";
import image13 from "../../assets/comm1.jpg";
import image15 from "../../assets/comm2.jpg";
import image14 from "../../assets/comm3.jpg";
import image16 from "../../assets/r.jpg";

const Kolaborate = () => {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <div className="mx-[10px]" key="1">
      <img
        src={image13}
        className="w-[600px] h-[190px] rounded-lg"
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div className="mx-[10px]" key="2">
      <img
        src={image14}
        className="w-[600px] h-[190px] rounded-lg"
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div className="mx-[10px]" key="3">
      <img
        src={image15}
        className="w-[600px] h-[190px] rounded-lg"
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div className="mx-[10px]" key="4">
      <img
        src={image16}
        className="w-[600px] h-[190px] rounded-lg"
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div className="mx-[10px]" key="4">
      <img
        src={image17}
        className="w-[600px] h-[190px] rounded-lg"
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
          Data Center Icon Plus
        </h1>
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
