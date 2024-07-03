const About = () => {
  return (
    <div className="w-full h-screen flex items-center justify-between px-[8%] flex-wrap">
      <div className="py-[100px] md:py-[0px] ">
        <h1 className="text-5xl font-semibold mb-5 max-w-[500px] font-customFont text-[#333]">
          Search & Rent Apartment Easily
        </h1>
        <p className="text-sm max-w-[500px] font-customFont text-[#333]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          voluptatum deleniti expedita quaerat necessitatibus libero?
        </p>
        <p className="text-sm max-w-[500px] font-customFont text-[#333]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus,
          esse.
        </p>
        <button className="py-2 px-5 bg-white text-gray-600 rounded-sm mt-10 mr-5 font-customFont text-[#333]">
          Iklan disini
        </button>
        <button className="py-2 px-5 bg-blue-600 text-white rounded-sm mt-10 font-customFont">
          Read More
        </button>
      </div>
      <div className="flex">
        <div className="flex justify-between">
          <div className="md:w-[350px] md:h-[350px] w-[300px] h-[300px] rounded-full bg-blue-600 relative border">
            <img
              src="../src/assets/hp.png"
              alt=""
              className="absolute top-[-0px] left-[-0px] md:w-[500px] md:h-[500px] w-[350px] h-[350px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
